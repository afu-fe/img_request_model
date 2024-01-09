import { createContext } from 'react'
import type { TImageInfo, TMeasureData } from '../data/types';

// ImageExperimentContextType
export type TImageExperimentContext = {
  imgList: TImageInfo[];
  measureData: TMeasureData[];
}

export const ImageExpirement = createContext<TImageExperimentContext | null>(null)

type TImageExperiment = {
  imgList: TMeasureData[];
}
export function createImageExperiment(config: TImageExperiment) {
  return {
    imgList: config.imgList,
  }
}


// interface CurrentUserContextType {
//   username: string;
// }

// const CurrentUserContext = createContext<CurrentUserContextType | null>(null);
// const CurrentUserContext = createContext<CurrentUserContextType>(
//   {} as CurrentUserContextType
// );

// const useCurrentUser = () => {
//   const currentUserContext = useContext(CurrentUserContext);

//   if (!currentUserContext) {
//     throw new Error(
//       "useCurrentUser has to be used within <CurrentUserContext.Provider>"
//     );
//   }

//   return currentUserContext;
// };


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