import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, ScrollView, View, Image, Alert } from "react-native"
import { useSignUp } from '@clerk/clerk-expo'
import { ReactNativeModal } from "react-native-modal"
import { fetchAPI } from "@/lib/fetch";

const SignUp = () => {

  const { isLoaded, signUp, setActive } = useSignUp()
  const [showSuccessModal, setShowSuccessModal] = useState(false)


  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  })

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerification({
        ...verification,

        state: "pending"
      })
    } catch (err: any) {
      Alert.alert("Erro", err.errors[0].longMessage)
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code
      })

      if (completeSignUp.status === 'complete') {

        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          })
        })

        await setActive({ session: completeSignUp.createdSessionId })
        setVerification({ ...verification, state: "success" })
      } else {
        setVerification({ ...verification, error: "Verification failed", state: "failed" })
      }
    } catch (err: any) {
      setVerification({ ...verification, error: err.errors[0].longMenssage, state: "failed" })
    }
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="flex items-center relative w-full h-[200px]">
          <Image
            source={images.logo}
            className="z-0 w-[180px] h-[180px]"
          />
        </View>
        <View className="flex items-center">
          <Text className="text-3xl font-JakartaBold">Bem-vindo!</Text>
          <Text className="text-[15px] font-JakartaLight">Entre com seus dados ou registre uma conta</Text>
        </View>

        <View className="p-5">
          <InputField
            label="Nome"
            placeholder="Digite seu nome"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Digite seu email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Senha"
            placeholder="Digite sua Senha"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Cadastrar"
            onPress={onSignUpPress}
            className="mt-6"
          />

          {/* <OAuth /> */}

          <Link href="/sign-in" className="text-lg text-center text-general-200 mt-10">
            <Text>Já tem uma conta? </Text>
            <Text className="text-primary-500">Faça Login</Text>
          </Link>
        </View>

        <ReactNativeModal
          isVisible={verification.state === 'pending'}
          onModalHide={() => {
            if (verification.state === "success") setShowSuccessModal(true)
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="text-2xl font-JakartaExtraBold mb-2">
              Verificação
            </Text>
            <Text className="font-Jakarta mb-5">
              Nós acabamos de enviar um codigo de verificação para o email {form.email}
            </Text>

            <InputField
              label="Código"
              icon={icons.lock}
              placeholder="12345"
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) => setVerification({ ...verification, code })}
            />

            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}

            <CustomButton
              title="Verificar Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal>

        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />

            <Text className="text-3xl font-JakartaBold text-center">
              Verificado
            </Text>

            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              Sua conta foi verificada com sucesso.
            </Text>

            <CustomButton
              title="Ir para Home"
              onPress={() => {
                setShowSuccessModal(false)
                router.replace("/(root)/(tabs)/home")
              }}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  )
}

export default SignUp;