import CenteredPage from '../CenteredPage'
import { GridLoader } from 'react-spinners'
import { useThemeStore } from '../../context/ThemeContext';

export default function LoadingPage() {
  const { theme } = useThemeStore();

    return (
        <CenteredPage>
            <h4 className="text-9xl mb-5 text-blue-700 dark:text-zinc-200 font-medium agu-display ">
                Loading
            </h4>
            <GridLoader size={25} color={theme === 'dark' ? 'white' : '#1d4ed8  '} />
        </CenteredPage>
    )
}
