import ProgressBar from "@/components/ProgressBar";
import { images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

const Report = () => {
    const { user } = useUser()
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        form_titulo: '',
        responsavel_nome: '',
        responsavel_cpf: '',
        responsavel_rg: '',
        responsavel_telefone: '',
        dadosEdificacao_logradouro: '',
        dadosEdificacao_bairro: '',
        dadosEdificacao_cnpj: '',
        dadosEdificacao_qtdPavimento: '',
        dadosEdificacao_qtdHabitantes: '',
        dadosEdificacao_areaConstruida: '',
        dadosEdificacao_areaAtingida: '',
        dadosEdificacao_tipoEstrutura: '',
        dadosEdificacao_tipoTeto: '',
        dadosEdificacao_tipopiso: '',
        dadosEdificacao_tipoSistemaPreventivo: '',
        dadosEdificacao_tipoGlp: '',
        dadosEdificacao_tipoGlpQuantidadeP13: '',
        dadosEdificacao_tipoGlpQuantidadeP45: '',
        dadosEdificacao_tipoGlpDentroEdificacao: '',
        dadosCombate_dataDoOcorrido: '',
        dadosCombate_HoraDoInicioOcorrido: '',
        dadosCombate_HoraDoFimOcorrido: '',
        dadosCombate_gerenciamentoRisco: '',
        dadosCombate_zonaOrigem: '',
        dadosCombate_focoInicial: '',
        dadosCombate_estrategiaCombate: '',
        dadosCombate_tecnicaUtilizada: '',
        dadosCombate_acoesTecnicas: '',
        dadosCombate_fezVentilacao: '',
        dadosCombate_tecnicasVentilacao: '',
        relato_texto: '',
        relato_observacoes: '',
        responsavelPeloPreenchimento_nome: '',
        responsavelPeloPreenchimento_matricula: '',
        responsavelPeloPreenchimento_viatura: '',
        responsavelPeloPreenchimento_obm: '',
    });

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        if (step < 6) setStep(step + 1);
    };

    // Função para voltar para a etapa anterior
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    // Função para lidar com a mudança dos valores do formulário
    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    // Função para lidar com a mudança dos valores do formulário
    const handleRestartSubmitForm = () => {
        setFormData({
            form_titulo: '',
            responsavel_nome: '',
            responsavel_cpf: '',
            responsavel_rg: '',
            responsavel_telefone: '',
            dadosEdificacao_logradouro: '',
            dadosEdificacao_bairro: '',
            dadosEdificacao_cnpj: '',
            dadosEdificacao_qtdPavimento: '',
            dadosEdificacao_qtdHabitantes: '',
            dadosEdificacao_areaConstruida: '',
            dadosEdificacao_areaAtingida: '',
            dadosEdificacao_tipoEstrutura: '',
            dadosEdificacao_tipoTeto: '',
            dadosEdificacao_tipopiso: '',
            dadosEdificacao_tipoSistemaPreventivo: '',
            dadosEdificacao_tipoGlp: '',
            dadosEdificacao_tipoGlpQuantidadeP13: '',
            dadosEdificacao_tipoGlpQuantidadeP45: '',
            dadosEdificacao_tipoGlpDentroEdificacao: '',
            dadosCombate_dataDoOcorrido: '',
            dadosCombate_HoraDoInicioOcorrido: '',
            dadosCombate_HoraDoFimOcorrido: '',
            dadosCombate_gerenciamentoRisco: '',
            dadosCombate_zonaOrigem: '',
            dadosCombate_focoInicial: '',
            dadosCombate_estrategiaCombate: '',
            dadosCombate_tecnicaUtilizada: '',
            dadosCombate_acoesTecnicas: '',
            dadosCombate_fezVentilacao: '',
            dadosCombate_tecnicasVentilacao: '',
            relato_texto: '',
            relato_observacoes: '',
            responsavelPeloPreenchimento_nome: '',
            responsavelPeloPreenchimento_matricula: '',
            responsavelPeloPreenchimento_viatura: '',
            responsavelPeloPreenchimento_obm: '',
        })
        setStep(1)
    };

    // Função para lidar com o envio final do formulário
    const handleSubmit = async () => {
        try {
            await fetchAPI(`/(api)/forms/${user?.emailAddresses}`, {
                method: "POST",
                body: JSON.stringify({
                    user_id: user?.primaryEmailAddress?.emailAddress,
                    form_titulo: formData.form_titulo,
                    responsavel_nome: formData.responsavel_nome,
                    responsavel_cpf: formData.responsavel_cpf,
                    responsavel_rg: formData.responsavel_rg,
                    responsavel_telefone: formData.responsavel_telefone,
                    dadosEdificacao_logradouro: formData.dadosEdificacao_logradouro,
                    dadosEdificacao_bairro: formData.dadosEdificacao_bairro,
                    dadosEdificacao_cnpj: formData.dadosEdificacao_cnpj,
                    dadosEdificacao_qtdPavimento: formData.dadosEdificacao_qtdPavimento,
                    dadosEdificacao_qtdHabitantes: formData.dadosEdificacao_qtdHabitantes,
                    dadosEdificacao_areaConstruida: formData.dadosEdificacao_areaConstruida,
                    dadosEdificacao_areaAtingida: formData.dadosEdificacao_areaAtingida,
                    dadosEdificacao_tipoEstrutura: formData.dadosEdificacao_tipoEstrutura,
                    dadosEdificacao_tipoTeto: formData.dadosEdificacao_tipoTeto,
                    dadosEdificacao_tipopiso: formData.dadosEdificacao_tipopiso,
                    dadosEdificacao_tipoSistemaPreventivo: formData.dadosEdificacao_tipoSistemaPreventivo,
                    dadosEdificacao_tipoGlp: formData.dadosEdificacao_tipoGlp,
                    dadosEdificacao_tipoGlpQuantidadeP13: formData.dadosEdificacao_tipoGlpQuantidadeP13,
                    dadosEdificacao_tipoGlpQuantidadeP45: formData.dadosEdificacao_tipoGlpQuantidadeP45,
                    dadosEdificacao_tipoGlpDentroEdificacao: formData.dadosEdificacao_tipoGlpDentroEdificacao,
                    dadosCombate_dataDoOcorrido: formData.dadosCombate_dataDoOcorrido,
                    dadosCombate_HoraDoInicioOcorrido: formData.dadosCombate_HoraDoInicioOcorrido,
                    dadosCombate_HoraDoFimOcorrido: formData.dadosCombate_HoraDoFimOcorrido,
                    dadosCombate_gerenciamentoRisco: formData.dadosCombate_gerenciamentoRisco,
                    dadosCombate_zonaOrigem: formData.dadosCombate_zonaOrigem,
                    dadosCombate_focoInicial: formData.dadosCombate_focoInicial,
                    dadosCombate_estrategiaCombate: formData.dadosCombate_estrategiaCombate,
                    dadosCombate_tecnicaUtilizada: formData.dadosCombate_tecnicaUtilizada,
                    dadosCombate_acoesTecnicas: formData.dadosCombate_acoesTecnicas,
                    dadosCombate_fezVentilacao: formData.dadosCombate_fezVentilacao,
                    dadosCombate_tecnicasVentilacao: formData.dadosCombate_tecnicasVentilacao,
                    relato_texto: formData.relato_texto,
                    relato_observacoes: formData.relato_observacoes,
                    responsavelPeloPreenchimento_nome: formData.responsavelPeloPreenchimento_nome,
                    responsavelPeloPreenchimento_matricula: formData.responsavelPeloPreenchimento_matricula,
                    responsavelPeloPreenchimento_viatura: formData.responsavelPeloPreenchimento_viatura,
                    responsavelPeloPreenchimento_obm: formData.responsavelPeloPreenchimento_obm
                })
            })
            setStep(0)
        } catch (err: any) {
            console.log(err)
        }
    };

    return (
        <ScrollView className="flex-1 pt-10 px-4">
            <View className="flex-1 pb-48">
                {step != 0 && (
                    <ProgressBar steps={6} currentStep={step} />
                )
                }

                {step === 1 && (
                    <View className="space-y-4">
                        <Text className="text-2xl font-bold">Formulário:</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Nome do formulário:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.form_titulo}
                                onChangeText={(value) => handleInputChange('form_titulo', value)}
                            />
                        </View>

                        <Text className="text-2xl font-bold">Etapa 1: Dados do Responsável</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Nome do Responsável:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavel_nome}
                                onChangeText={(value) => handleInputChange('responsavel_nome', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                CPF:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavel_cpf}
                                onChangeText={(value) => handleInputChange('responsavel_cpf', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                RG:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavel_rg}
                                onChangeText={(value) => handleInputChange('responsavel_rg', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Telefone:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavel_telefone}
                                onChangeText={(value) => handleInputChange('responsavel_telefone', value)}
                            />
                        </View>

                        <View className="flex-row justify-end">
                            <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={nextStep}>
                                <Text className="text-white text-center">Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 2 && (
                    <View className="space-y-4">
                        <Text className="text-2xl font-bold">Etapa 2: Dados da Edificação</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Logradouro:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_logradouro}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_logradouro', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Bairro:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_bairro}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_bairro', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                CNPJ
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_cnpj}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_cnpj', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Qtd de Pavimentos:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_qtdPavimento}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_qtdPavimento', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Qtd de Habitantes:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_qtdHabitantes}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_qtdHabitantes', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Área Construída:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_areaConstruida}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_areaConstruida', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Área atingida:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_areaAtingida}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_areaAtingida', value)}
                            />
                        </View>

                        <View className="flex-row justify-between">
                            <TouchableOpacity className="bg-gray-500 p-2 rounded" onPress={prevStep}>
                                <Text className="text-white text-center">Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={nextStep}>
                                <Text className="text-white text-center">Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 3 && (
                    <View className="space-y-4">
                        <Text className="text-2xl font-bold">Etapa 2: Dados da Edificação</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de Estrutura:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoEstrutura}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoEstrutura', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de Teto:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoTeto}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoTeto', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de Piso:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipopiso}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipopiso', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de Sistema Preventivo:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoSistemaPreventivo}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoSistemaPreventivo', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de GLP:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoGlp}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoGlp', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de GLP - Quantidade:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoGlpQuantidadeP13}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoGlpQuantidadeP13', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de GLP - Quantidade:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoGlpQuantidadeP45}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoGlpQuantidadeP45', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Tipo de GLP - Dentro da Edificação:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosEdificacao_tipoGlpDentroEdificacao}
                                onChangeText={(value) => handleInputChange('dadosEdificacao_tipoGlpDentroEdificacao', value)}
                            />
                        </View>

                        <View className="flex-row justify-between">
                            <TouchableOpacity className="bg-gray-500 p-2 rounded" onPress={prevStep}>
                                <Text className="text-white text-center">Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={nextStep}>
                                <Text className="text-white text-center">Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 4 && (
                    <View className="space-y-4">
                        <Text className="text-2xl font-bold">Etapa 3: Dados do Combate</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Data da Extinção:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_dataDoOcorrido}
                                onChangeText={(value) => handleInputChange('dadosCombate_dataDoOcorrido', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Hora do Inicio:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_HoraDoInicioOcorrido}
                                onChangeText={(value) => handleInputChange('dadosCombate_HoraDoInicioOcorrido', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Hora de Conclusão:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_HoraDoFimOcorrido}
                                onChangeText={(value) => handleInputChange('dadosCombate_HoraDoFimOcorrido', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Gerenciamento de Riscos:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_gerenciamentoRisco}
                                onChangeText={(value) => handleInputChange('dadosCombate_gerenciamentoRisco', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Zona de Origem:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_zonaOrigem}
                                onChangeText={(value) => handleInputChange('dadosCombate_zonaOrigem', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Foco Inicial:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_focoInicial}
                                onChangeText={(value) => handleInputChange('dadosCombate_focoInicial', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Estratégia de Combate:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_estrategiaCombate}
                                onChangeText={(value) => handleInputChange('dadosCombate_estrategiaCombate', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Técnica Utilizada:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_tecnicaUtilizada}
                                onChangeText={(value) => handleInputChange('dadosCombate_tecnicaUtilizada', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Ações Técnicas:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_acoesTecnicas}
                                onChangeText={(value) => handleInputChange('dadosCombate_acoesTecnicas', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Fez Ventilação?
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_fezVentilacao}
                                onChangeText={(value) => handleInputChange('dadosCombate_fezVentilacao', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Técnicas de Ventilação:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.dadosCombate_tecnicasVentilacao}
                                onChangeText={(value) => handleInputChange('dadosCombate_tecnicasVentilacao', value)}
                            />
                        </View>

                        <View className="flex-row justify-between">
                            <TouchableOpacity className="bg-gray-500 p-2 rounded" onPress={prevStep}>
                                <Text className="text-white text-center">Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={nextStep}>
                                <Text className="text-white text-center">Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 5 && (
                    <View className="space-y-4">
                        <Text className="text-2xl font-bold">Etapa 4: Relato das Testemunhas</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Relato:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.relato_texto}
                                onChangeText={(value) => handleInputChange('relato_texto', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Observações:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.relato_observacoes}
                                onChangeText={(value) => handleInputChange('relato_observacoes', value)}
                            />
                        </View>

                        <View className="flex-row justify-between">
                            <TouchableOpacity className="bg-gray-500 p-2 rounded" onPress={prevStep}>
                                <Text className="text-white text-center">Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={nextStep}>
                                <Text className="text-white text-center">Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 6 && (
                    <View className="space-y-4">
                        <Text className="text-2xl font-bold">Etapa 5: Responsável pelo preenchimento</Text>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Nome do responsável pelo preenchimento:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavelPeloPreenchimento_nome}
                                onChangeText={(value) => handleInputChange('responsavelPeloPreenchimento_nome', value)}
                            />
                        </View>

                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Matrícula:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavelPeloPreenchimento_matricula}
                                onChangeText={(value) => handleInputChange('responsavelPeloPreenchimento_matricula', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                Viatura:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavelPeloPreenchimento_viatura}
                                onChangeText={(value) => handleInputChange('responsavelPeloPreenchimento_viatura', value)}
                            />
                        </View>
                        <View className="my-2">
                            <Text className="text-lg font-JakartaSemiBold mb-3">
                                OBM:
                            </Text>
                            <TextInput
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Digite aqui"
                                value={formData.responsavelPeloPreenchimento_obm}
                                onChangeText={(value) => handleInputChange('responsavelPeloPreenchimento_obm', value)}
                            />
                        </View>

                        <View className="flex-row justify-between">
                            <TouchableOpacity className="bg-gray-500 p-2 rounded" onPress={prevStep}>
                                <Text className="text-white text-center">Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-green-500 p-2 rounded" onPress={handleSubmit}>
                                <Text className="text-white text-center">Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {step === 0 && (
                    <View className="h-screen justify-center items-center space-y-4">
                        <View className="justify-center items-center space-y-4">
                            <Image source={images.check} className="z-0 w-[150px] h-[150px]" />
                            <Text className="text-2xl font-bold text-center mb-10">Formulário cadastrado com sucesso</Text>
                        </View>
                        <TouchableOpacity className="bg-green-500 px-12 py-4 rounded-lg" onPress={handleRestartSubmitForm}>
                            <Text className="text-2xl text-white text-center">Cadastrar Outro</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Report;