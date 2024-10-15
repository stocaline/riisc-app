import {TextInputProps, TouchableOpacityProps} from "react-native";

declare interface Driver {
    driver_id: number;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
}

declare interface MarkerData {
    latitude: number;
    longitude: number;
    id: number;
    title: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
    first_name: string;
    last_name: string;
    time?: number;
    price?: string;
}

declare interface MapProps {
    destinationLatitude?: number;
    destinationLongitude?: number;
    onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
    selectedDriver?: number | null;
    onMapReady?: () => void;
}

declare interface Form {
    id: number;
    user_id: string;
    form_titulo: string
    responsavel_nome: string;
    responsavel_cpf: string;
    responsavel_rg: string;
    responsavel_telefone: string;
    dadosedificacao_logradouro: string;
    dadosedificacao_bairro: string;
    dadosedificacao_cnpj: string;
    dadosedificacao_qtdPavimento: number;
    dadosedificacao_qtdHabitantes: number;
    dadosedificacao_areaConstruida: number;
    dadosedificacao_areaAtingida: number;
    dadosedificacao_tipoEstrutura: string;
    dadosedificacao_tipoTeto: string;
    dadosedificacao_tipopiso: string;
    dadosedificacao_tipoSistemaPreventivo: string;
    dadosedificacao_tipoGlp: string;
    dadosedificacao_tipoGlpQuantidadeP13: number;
    dadosedificacao_tipoGlpQuantidadeP45: number;
    dadosedificacao_tipoGlpDentroEdificacao: boolean;
    dadoscombate_dataDoOcorrido: string; // Consider using `Date` for date fields
    dadoscombate_HoraDoInicioOcorrido: string; // Consider using `Date` for time fields
    dadoscombate_HoraDoFimOcorrido: string; // Consider using `Date` for time fields
    dadoscombate_gerenciamentoRisco: string;
    dadoscombate_zonaOrigem: string;
    dadoscombate_focoInicial: string;
    dadoscombate_estrategiaCombate: string;
    dadoscombate_tecnicaUtilizada: string;
    dadoscombate_acoesTecnicas: string;
    dadoscombate_fezVentilacao: boolean;
    dadoscombate_tecnicasVentilacao: string;
    relato_texto: string;
    relato_observacoes: string;
    responsavelpelopreenchimento_nome: string;
    responsavelpelopreenchimento_matricula: string;
    responsavelpelopreenchimento_viatura: string;
    responsavelpelopreenchimento_obm: string;
    created_at: string;
  }

declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
}

declare interface GoogleInputProps {
    icon?: string;
    initialLocation?: string;
    containerStyle?: string;
    textInputBackgroundColor?: string;
    handlePress: ({
                      latitude,
                      longitude,
                      address,
                  }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
}

declare interface PaymentProps {
    fullName: string;
    email: string;
    amount: string;
    driverId: number;
    rideTime: number;
}

declare interface LocationStore {
    userLatitude: number | null;
    userLongitude: number | null;
    userAddress: string | null;
    destinationLatitude: number | null;
    destinationLongitude: number | null;
    destinationAddress: string | null;
    setUserLocation: ({
                          latitude,
                          longitude,
                          address,
                      }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
    setDestinationLocation: ({
                                 latitude,
                                 longitude,
                                 address,
                             }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface DriverStore {
    drivers: MarkerData[];
    selectedDriver: number | null;
    setSelectedDriver: (driverId: number) => void;
    setDrivers: (drivers: MarkerData[]) => void;
    clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
    item: MarkerData;
    selected: number;
    setSelected: () => void;
}