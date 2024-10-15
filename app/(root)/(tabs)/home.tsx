import ReportCard from '@/components/ReportCard'
import { icons, images } from '@/constants'
import { useFetch } from '@/lib/fetch'
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
import { Link, useNavigation } from 'expo-router'
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";
import { Form } from '@/types/type'

const recentForms = [
  {
    "form_id": "1",
    "title": "Vazamento de gás",
    "origin_address": "Ingleses do rio vermelho",
    "created_at": "2024-08-12 05:19:20.620007",
    "form": {
      "text": "ESTE É O FORMULÁRIO"
    }
  },
  {
    "form_id": "2",
    "title": "Explosão de motor",
    "origin_address": "Canasvieiras",
    "created_at": "2024-08-12 06:12:17.683046",
    "form": {
      "text": "ESTE É O FORMULÁRIO"
    }
  },
  {
    "form_id": "3",
    "title": "Queda de poste",
    "origin_address": "Centro, florianópolis",
    "created_at": "2024-08-12 08:49:01.809053",
    "form": {
      "text": "ESTE É O FORMULÁRIO"
    }
  },
  {
    "form_id": "4",
    "title": "Desconhecido",
    "origin_address": "Santinho",
    "created_at": "2024-08-12 18:43:54.297838",
    "form": {
      "text": "ESTE É O FORMULÁRIO"
    }
  }
]

export default function Page() {
  const { user } = useUser()
  const navigation = useNavigation();
  const { signOut } = useAuth();
  const { data: recentForms, loading } = useFetch(`/(api)/forms/${user?.emailAddresses}`)

  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };

  const handleRefleshPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: navigation.getState().routes[navigation.getState().index].name }],
    });
  };

  async function handleOpenReport(item: any) {
    router.push({
      pathname: '/(root)/viewform',
      params: { formData: JSON.stringify(item)}
    })
  };


  return (
    <SafeAreaView>
      <FlatList
        //@ts-ignore
        data={recentForms?.slice(0, 5)}
        renderItem={({ item }) => <TouchableOpacity onPress={() => handleOpenReport(item)}><ReportCard report={item} /></TouchableOpacity>}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className='flex flex-col items-center justify-center'>
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className='w-40 h-40'
                  alt='Sem formulários cadastrados'
                  resizeMode='contain'
                />
                <Text className='text-sm'>Sem formulários cadastrados</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className='flex flex-row items-center justify-between my-5'>
              <Text className='text-xl capitalize font-JakartaExtraBold'>
                Bem-vindo, {user?.firstName || user?.emailAddresses[0].emailAddress.split("@")[0]}👋
              </Text>
              <TouchableOpacity onPress={handleRefleshPage} className="justify-center items-center w-10 h-10 rounded-full bg-white">
                <Image source={icons.target} className='w-4 h-4' />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSignOut} className="justify-center items-center w-10 h-10 rounded-full bg-white">
                <Image source={icons.out} className='w-4 h-4' />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}