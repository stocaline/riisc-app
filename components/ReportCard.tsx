import { icons, images } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Form } from "@/types/type";
import { Image, Text, View } from "react-native";

const ReportCard = ({ report: {
    form_titulo, dadosedificacao_bairro, created_at
} }: { report: Form }) => (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
        <View className="flex flex-col items-center justify-center p-3">
            <View className="flex flex-row items-center justify-between">
                <Image
                    source={images.logo}
                    className="w-[90px] h-[90px] rounded-lg"
                />
                <View className="flex flex-col mx-5 gap-y-5 flex-1">
                    <View className="flex flex-row items-center gap-x-2">
                        <Image source={icons.to} className="w-5 h-5" />
                        <Text className="text-md font-JakartaMedium">{form_titulo}</Text>
                    </View>
                    <View className="flex flex-row items-center gap-x-2">
                        <Image source={icons.point} className="w-5 h-5" />
                        <Text className="text-md font-JakartaMedium" numberOfLines={1}>{dadosedificacao_bairro}</Text>
                    </View>
                </View>
            </View>
            <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
                <View className="flex flex-row items-center w-full justify-between mb-5">
                    <Text className="text-md font-JakartaMedium text-gray-500"> 
                        Data & Hora
                    </Text>
                    <Text className="text-md font-JakartaMedium text-gray-500"> 
                        {formatDate(created_at)} - {formatTime(created_at)}
                    </Text>
                </View>
            </View>
        </View>
    </View>

)

export default ReportCard;