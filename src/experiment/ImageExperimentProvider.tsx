import { ImageExpirement } from "./context"

type TImageExperimentProviderProps = {
  children: React.ReactNode;
  experiement: any;
}

export const ImageExperimentProvider: React.FC<TImageExperimentProviderProps> = ({ children, experiement }) => {
  return (
    <ImageExpirement.Provider value={experiement}>
      {children}
    </ImageExpirement.Provider>
  )
}
