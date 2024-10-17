import JsonView from '@/components/JsonView';
import { icons } from '@/constants';
import { Form } from '@/types/type';
import { router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'


export default function ViewForm() {
  const { formData } = useLocalSearchParams();
  const data: Form = JSON.parse(formData as string)
  console.log(data)

  const PdfHtmlModel = `
  <html>
    <body>
      <div style="padding: 16px;">
  <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">
    Formulário: ${ data.form_titulo }
  </h2>

  <div style="margin-bottom: 24px;">
    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">Responsável</h3>
    <p style="margin-bottom: 4px;">Nome: ${ data.responsavel_nome || 'N/A' }</p>
    <p style="margin-bottom: 4px;">CPF: ${ data.responsavel_cpf || 'N/A' }</p>
    <p style="margin-bottom: 4px;">RG: ${ data.responsavel_rg || 'N/A' }</p>
    <p style="margin-bottom: 4px;">Telefone: ${ data.responsavel_telefone || 'N/A' }</p>
  </div>

  <div style="margin-bottom: 24px;">
    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">Dados de Combate</h3>
    <p style="margin-bottom: 4px;">Ações Técnicas: ${ data.dadoscombate_acoesTecnicas || 'N/A' }</p>
    <p style="margin-bottom: 4px;">Estratégia de Combate: ${ data.dadoscombate_estrategiaCombate || 'N/A' }</p>
    <p style="margin-bottom: 4px;">Ventilação Feita: ${ data.dadoscombate_fezVentilacao }</p>
    <p style="margin-bottom: 4px;">Foco Inicial: ${ data.dadoscombate_focoInicial || 'N/A' }</p>
    <p style="margin-bottom: 4px;">Gerenciamento de Risco: ${ data.dadoscombate_gerenciamentoRisco || 'N/A' }</p>
  </div>

  <div style="margin-bottom: 24px;">
    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">Dados da Edificação</h3>
    <p style="margin-bottom: 4px;">Área Atingida: ${ data.dadosedificacao_areaAtingida } m²</p>
    <p style="margin-bottom: 4px;">Área Construída: ${ data.dadosedificacao_areaConstruida } m²</p>
    <p style="margin-bottom: 4px;">Bairro: ${ data.dadosedificacao_bairro || 'N/A' }</p>
    <p style="margin-bottom: 4px;">Quantidade de Habitantes: ${ data.dadosedificacao_qtdHabitantes }</p>
    <p style="margin-bottom: 4px;">Quantidade de Pavimentos: ${ data.dadosedificacao_qtdPavimento }</p>
  </div>

  <div style="margin-bottom: 24px;">
    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">Observações</h3>
    <p>${ data.relato_observacoes || 'Nenhuma observação' }</p>
  </div>
</div>

    </body>
  </html>
  `

  async function handleDownloadPdfFile() {
    const file = await printToFileAsync({
      html: PdfHtmlModel,
      base64: false
    })

    await shareAsync(file.uri)
  };

  function handleBack() {
    router.back()
  };


  return (
    <SafeAreaView>
      <View className='w-full justify-center items-end p-5'>
      <TouchableOpacity onPress={handleDownloadPdfFile} className="justify-center items-center w-10 h-10 rounded-full bg-white">
        <Image source={icons.exportpdf} className='w-4 h-4' />
      </TouchableOpacity>
      </View>
      <JsonView data={data} />
      <View className='w-full justify-center items-center'>
        <TouchableOpacity onPress={handleBack} className="flex-row items-center rounded-full gap-1 px-4 py-2 bg-slate-300">
          <Image source={icons.backArrow} className='w-4 h-4' />
          <Text className='text-neutral-500'>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

