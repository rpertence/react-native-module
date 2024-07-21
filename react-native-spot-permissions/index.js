const useSpotPermissions = () => {
  const checkAllowed = (mapSpotId, containerNumber) => {
    return mapSpotId === containerNumber;
  };

  return {
    checkAllowed,
  };
};

export default useSpotPermissions;
