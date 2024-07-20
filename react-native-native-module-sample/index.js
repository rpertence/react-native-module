// main index.js

// import { NativeModules } from 'react-native';

// const { NativeModuleSample } = NativeModules;

const usePermissions = () => {
    const checkAllowed = (depotMapSpotId, containerId) => {
        return depotMapSpotId === containerId;
    }

    return {
        checkAllowed
    }
}

export default usePermissions;
