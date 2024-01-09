import { ImageExpirement, TImageExperimentContext } from "./context"

type TImageExperimentProviderProps = {
  children: React.ReactNode;
  experiement: TImageExperimentContext;
}

export const ImageExperimentProvider: React.FC<TImageExperimentProviderProps> = ({ children, experiement }) => {
  // TODO more logic

  return (
    <ImageExpirement.Provider value={experiement}>
      {children}
    </ImageExpirement.Provider>
  )
}
