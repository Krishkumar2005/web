type HomeProps = {
  isOpen: boolean;
  deviceData: {deviceId: string, status: string}| null,
  handleSync: ()=>void
};
export const Home = ({isOpen, deviceData, handleSync}: HomeProps) => {
 
  return (
    <div className={`min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gray-50 ${isOpen? "translate-x-60" : "translate-x-0"}`}>
      
      <h1 className="text-4xl font-bold mb-4">
        BentoVeda Hybrid Bridge
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        One web application that adapts to browser and native mobile environments.
      </p>

      <button
        onClick={handleSync}
        className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
      >
        Sync with Device
      </button>

      {deviceData && (
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <p className="text-sm text-gray-500">Device ID</p>
          <p className="font-semibold mb-3">{deviceData.deviceId}</p>

          <p className="text-sm text-gray-500">Status</p>
          <p className="font-semibold text-green-600">
            {deviceData.status}
          </p>
        </div>
      )}
    </div>
  );
}


