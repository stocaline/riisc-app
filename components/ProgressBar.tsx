import React from 'react';
import { View } from 'react-native';

interface StepProgressBarProps {
  steps: number;
  currentStep: number;
}

const ProgressBar: React.FC<StepProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <View className="flex flex-row items-center justify-between w-full">
      {Array.from({ length: steps }).map((_, index) => (
        <React.Fragment key={index}>
          <View 
            className={`w-6 h-6 rounded-full ${
              index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
            } flex items-center justify-center`}
          >
            <View className={`w-4 h-4 rounded-full ${
              index <= currentStep ? 'bg-white' : 'bg-gray-300'
            }`} />
          </View>
          {index < steps - 1 && (
            <View 
              className={`flex-1 h-1 ${
                index < currentStep - 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default ProgressBar;