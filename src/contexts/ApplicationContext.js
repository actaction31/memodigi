import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useAlert } from "@/hooks/useAlert";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
// import useResponsiveState from "@/hooks/useResponsiveState";

const AppContext = createContext({});

export function AppWrapper({ children }) {

    // const { height, width } = useResponsiveState();
    const [ showMessage, messageData ] = useAlert();

    const [ accountUniqCodeValue, setAccountUniqCodeValue ] = useState(null);

    const {
        data: accountDetails,
        refetch: accountRefetch,
        isError: accountDetailsIsError,
        error: accountDetailsError,
    } = useQuery({
        queryKey: ["accountLoad", accountUniqCodeValue],
        queryFn: () => {
            return callApiAction({ action: 'accountView', urlParams: { accountUniqCode: accountUniqCodeValue } })
                .then(response => {
                    return response?.data;
                })
        },
        staleTime: 60 * 1000,
        retry: 0,
        enabled: !!accountUniqCodeValue,
    });

    const accountQuery = useMemo(
        () => ({
            data: accountDetails,
            refetch: accountRefetch,
            isError: accountDetailsIsError,
            error: accountDetailsError,
        }),
        [ accountDetails, accountRefetch, accountDetailsIsError, accountDetailsError ],
    );

    const [ configContext, setConfigContext ] = useState({
        // authToken: null,
        isLoginPopupShow: false,
        redirectAfterLoginUri: null,
        thinMode: false,
        isMobile: false,
        screenWidth: null,
        screenHeight: null,
        backgroundVolume: 0,
    });

    function setConfigContextItems(items) {
        setConfigContext((prev) => {
            return { ...prev, ...items }
        });
    }

    const handleVolumeChange = (value) => {
        setConfigContextItems({ backgroundVolume: value });
    };
    const toggleMuted = () => {
        setConfigContext((prev) => {
            return {
                ...prev,
                backgroundVolume: prev?.backgroundVolume === 0 ? 0.2 : 0,
            }
        });
    }
    const muteBackgroundMusic = () => {
        setConfigContextItems({ backgroundVolume: 0 });
    }
    const isMuted = (configContext?.backgroundVolume === 0);

    // useEffect(() => {
    //     setConfigContextItems({
    //         isMobile: width < 740,
    //         screenWidth: width,
    //         screenHeight: height,
    //     });
    // }, [ width, height ])

    const contextParams = {
        configContext,
        setConfigContext,
        setConfigContextItems,
        accountUniqCodeValue,
        setAccountUniqCodeValue,
        accountQuery,
        showMessage,
        bgMusic: {
            handleVolumeChange,
            toggleMuted,
            muteBackgroundMusic,
            isMuted,
            volume: configContext?.backgroundVolume,
        }
    }

    return (
        <AppContext.Provider value={ contextParams }>
            { messageData }
            { children }
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}