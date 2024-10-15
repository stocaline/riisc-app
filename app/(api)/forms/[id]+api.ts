import { neon } from "@neondatabase/serverless";

export async function GET(request: Request, { id }: { id: string }) {

  if (!id)
    return Response.json({ error: "Missing required fields" }, { status: 400 });

  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`
        SELECT
            forms.id,
            forms.user_id,
            forms.form_titulo,
            forms.responsavel_nome,
            forms.responsavel_cpf,
            forms.responsavel_rg,
            forms.responsavel_telefone,
            forms.dadosedificacao_logradouro,
            forms.dadosedificacao_bairro,
            forms.dadosedificacao_cnpj,
            forms.dadosedificacao_qtdPavimento,
            forms.dadosedificacao_qtdHabitantes,
            forms.dadosedificacao_areaConstruida,
            forms.dadosedificacao_areaAtingida,
            forms.dadosedificacao_tipoEstrutura,
            forms.dadosedificacao_tipoTeto,
            forms.dadosedificacao_tipopiso,
            forms.dadosedificacao_tipoSistemaPreventivo,
            forms.dadosedificacao_tipoGlp,
            forms.dadosedificacao_tipoGlpQuantidadeP13,
            forms.dadosedificacao_tipoGlpQuantidadeP45,
            forms.dadosedificacao_tipoGlpDentroEdificacao,
            forms.dadoscombate_dataDoOcorrido,
            forms.dadoscombate_HoraDoInicioOcorrido,
            forms.dadoscombate_HoraDoFimOcorrido,
            forms.dadoscombate_gerenciamentoRisco,
            forms.dadoscombate_zonaOrigem,
            forms.dadoscombate_focoInicial,
            forms.dadoscombate_estrategiaCombate,
            forms.dadoscombate_tecnicaUtilizada,
            forms.dadoscombate_acoesTecnicas,
            forms.dadoscombate_fezVentilacao,
            forms.dadoscombate_tecnicasVentilacao,
            forms.relato_texto,
            forms.relato_observacoes,
            forms.responsavelPeloPreenchimento_nome,
            forms.responsavelPeloPreenchimento_matricula,
            forms.responsavelPeloPreenchimento_viatura,
            forms.responsavelPeloPreenchimento_obm,
            forms.created_at
        FROM 
            forms
        WHERE 
            forms.user_id = ${id}
        ORDER BY 
            forms.created_at DESC;
    `;

    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching forms:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {

  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { 
      user_id,
      form_titulo,
      responsavel_nome,
      responsavel_cpf,
      responsavel_rg,
      responsavel_telefone,
      dadosEdificacao_logradouro,
      dadosEdificacao_bairro,
      dadosEdificacao_cnpj,
      dadosEdificacao_qtdPavimento,
      dadosEdificacao_qtdHabitantes,
      dadosEdificacao_areaConstruida,
      dadosEdificacao_areaAtingida,
      dadosEdificacao_tipoEstrutura,
      dadosEdificacao_tipoTeto,
      dadosEdificacao_tipopiso,
      dadosEdificacao_tipoSistemaPreventivo,
      dadosEdificacao_tipoGlp,
      dadosEdificacao_tipoGlpQuantidadeP13,
      dadosEdificacao_tipoGlpQuantidadeP45,
      dadosEdificacao_tipoGlpDentroEdificacao,
      dadosCombate_dataDoOcorrido,
      dadosCombate_HoraDoInicioOcorrido,
      dadosCombate_HoraDoFimOcorrido,
      dadosCombate_gerenciamentoRisco,
      dadosCombate_zonaOrigem,
      dadosCombate_focoInicial,
      dadosCombate_estrategiaCombate,
      dadosCombate_tecnicaUtilizada,
      dadosCombate_acoesTecnicas,
      dadosCombate_fezVentilacao,
      dadosCombate_tecnicasVentilacao,
      relato_texto,
      relato_observacoes,
      responsavelPeloPreenchimento_nome,
      responsavelPeloPreenchimento_matricula,
      responsavelPeloPreenchimento_viatura,
      responsavelPeloPreenchimento_obm, 
    } = await request.json();

    const response = await sql`
    INSERT INTO forms (
            user_id,
            form_titulo,
            responsavel_nome,
            responsavel_cpf,
            responsavel_rg,
            responsavel_telefone,
            dadosedificacao_logradouro,
            dadosedificacao_bairro,
            dadosedificacao_cnpj,
            dadosedificacao_qtdPavimento,
            dadosedificacao_qtdHabitantes,
            dadosedificacao_areaConstruida,
            dadosedificacao_areaAtingida,
            dadosedificacao_tipoEstrutura,
            dadosedificacao_tipoTeto,
            dadosedificacao_tipopiso,
            dadosedificacao_tipoSistemaPreventivo,
            dadosedificacao_tipoGlp,
            dadosedificacao_tipoGlpQuantidadeP13,
            dadosedificacao_tipoGlpQuantidadeP45,
            dadosedificacao_tipoGlpDentroEdificacao,
            dadoscombate_dataDoOcorrido,
            dadoscombate_HoraDoInicioOcorrido,
            dadoscombate_HoraDoFimOcorrido,
            dadoscombate_gerenciamentoRisco,
            dadoscombate_zonaOrigem,
            dadoscombate_focoInicial,
            dadoscombate_estrategiaCombate,
            dadoscombate_tecnicaUtilizada,
            dadoscombate_acoesTecnicas,
            dadoscombate_fezVentilacao,
            dadoscombate_tecnicasVentilacao,
            relato_texto,
            relato_observacoes,
            responsavelPeloPreenchimento_nome,
            responsavelPeloPreenchimento_matricula,
            responsavelPeloPreenchimento_viatura,
            responsavelPeloPreenchimento_obm
    )
    VALUES (
        ${user_id},
        ${form_titulo || ""},
        ${responsavel_nome || ""},
        ${responsavel_cpf || ""},
        ${responsavel_rg || ""},
        ${responsavel_telefone || ""},
        ${dadosEdificacao_logradouro || ""},
        ${dadosEdificacao_bairro || ""},
        ${dadosEdificacao_cnpj || ""},
        ${dadosEdificacao_qtdPavimento || ""},
        ${dadosEdificacao_qtdHabitantes || ""},
        ${dadosEdificacao_areaConstruida || ""},
        ${dadosEdificacao_areaAtingida || ""},
        ${dadosEdificacao_tipoEstrutura || ""},
        ${dadosEdificacao_tipoTeto || ""},
        ${dadosEdificacao_tipopiso || ""},
        ${dadosEdificacao_tipoSistemaPreventivo || ""},
        ${dadosEdificacao_tipoGlp || ""},
        ${dadosEdificacao_tipoGlpQuantidadeP13 || ""},
        ${dadosEdificacao_tipoGlpQuantidadeP45 || ""},
        ${dadosEdificacao_tipoGlpDentroEdificacao || ""},
        ${dadosCombate_dataDoOcorrido || ""},
        ${dadosCombate_HoraDoInicioOcorrido || ""},
        ${dadosCombate_HoraDoFimOcorrido || ""},
        ${dadosCombate_gerenciamentoRisco || ""},
        ${dadosCombate_zonaOrigem || ""},
        ${dadosCombate_focoInicial || ""},
        ${dadosCombate_estrategiaCombate || ""},
        ${dadosCombate_tecnicaUtilizada || ""},
        ${dadosCombate_acoesTecnicas || ""},
        ${dadosCombate_fezVentilacao || false},
        ${dadosCombate_tecnicasVentilacao || ""},
        ${relato_texto || ""},
        ${relato_observacoes || ""},
        ${responsavelPeloPreenchimento_nome || ""},
        ${responsavelPeloPreenchimento_matricula || ""},
        ${responsavelPeloPreenchimento_viatura || ""},
        ${responsavelPeloPreenchimento_obm || ""}
    )
`
    return new Response(JSON.stringify({ data: response }), {
        status: 201,
    })

  
  } catch (error) {
    console.error("Error fetching forms:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}