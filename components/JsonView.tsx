import { Form } from "@/types/type";
import { ScrollView, Text, View } from "react-native";

interface fooo {
   data: Form
}

const JsonView = ({ data }: fooo) => {
  return (
    <ScrollView className='p-4'>
      <Text className='text-2xl font-bold mb-4'>
        Formulário: {data.form_titulo}
      </Text>

      <View className='mb-6'>
        <Text className='text-lg font-semibold mb-2'>Responsável</Text>
        <Text className='mb-1'>Nome: {data.responsavel_nome || 'N/A'}</Text>
        <Text className='mb-1'>CPF: {data.responsavel_cpf || 'N/A'}</Text>
        <Text className='mb-1'>RG: {data.responsavel_rg || 'N/A'}</Text>
        <Text className='mb-1'>Telefone: {data.responsavel_telefone || 'N/A'}</Text>
      </View>

      <View className='mb-6'>
        <Text className='text-lg font-semibold mb-2'>Dados de Combate</Text>
        <Text className='mb-1'>Ações Técnicas: {data.dadoscombate_acoesTecnicas || 'N/A'}</Text>
        <Text className='mb-1'>Estratégia de Combate: {data.dadoscombate_estrategiaCombate || 'N/A'}</Text>
        <Text className='mb-1'>Ventilação Feita: {data.dadoscombate_fezVentilacao}</Text>
        <Text className='mb-1'>Foco Inicial: {data.dadoscombate_focoInicial || 'N/A'}</Text>
        <Text className='mb-1'>Gerenciamento de Risco: {data.dadoscombate_gerenciamentoRisco || 'N/A'}</Text>
      </View>

      <View className='mb-6'>
        <Text className='text-lg font-semibold mb-2'>Dados da Edificação</Text>
        <Text className='mb-1'>Área Atingida: {data.dadosedificacao_areaAtingida} m²</Text>
        <Text className='mb-1'>Área Construída: {data.dadosedificacao_areaConstruida} m²</Text>
        <Text className='mb-1'>Bairro: {data.dadosedificacao_bairro || 'N/A'}</Text>
        <Text className='mb-1'>Quantidade de Habitantes: {data.dadosedificacao_qtdHabitantes}</Text>
        <Text className='mb-1'>Quantidade de Pavimentos: {data.dadosedificacao_qtdPavimento}</Text>
      </View>

      <View className='mb-6'>
        <Text className='text-lg font-semibold mb-2'>Observações</Text>
        <Text>{data.relato_observacoes || 'Nenhuma observação'}</Text>
      </View>
    </ScrollView>
  );
};

export default JsonView;
