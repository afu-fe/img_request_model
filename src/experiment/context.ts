import { createContext, useContext } from 'react'
import type { TImageInfo, TMeasureData } from '../data/types';

// ImageExperimentContextType
export type TImageExperimentContext = {
  imgList: TImageInfo[];
  measureData: TMeasureData[];
}

// const CurrentUserContext = createContext<CurrentUserContextType>(
//   {} as CurrentUserContextType
// );
export const ImageExpirement = createContext<TImageExperimentContext | null>(null)

export type TImageExperimentConfig = {
  imgList: TImageInfo[];
}

export function createImageExperiment(config: TImageExperimentConfig): TImageExperimentContext {
  return {
    imgList: config.imgList,
    measureData: [],
  }
}

export function useImageExperiment() {
  const context = useContext(ImageExpirement)

  if (!context) {
    throw new Error('useImageExperiment must be used within ImageExperimentProvider')
  }

  // TODO more logic

  return { context }
}

// const App = () => {
//   const [currentUser, setCurrentUser] = useState<CurrentUserContextType>({
//     username: "filiptammergard",
//   });

//   return (
//     <CurrentUserContext.Provider value={currentUser}>
//       <MyComponent />
//     </CurrentUserContext.Provider>
//   );
// };


// const MyComponent = () => {
//   const currentUser = useCurrentUser();

//   return <p>Username: {currentUser.username}.</p>;
// };