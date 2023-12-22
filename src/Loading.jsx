import loadinggif from "../public/loading.gif"

const Loading = () => {
    return (
        <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-[#e6e6e6]">

            <img src={loadinggif} alt="" />
            
        </div>
    );
};

export default Loading;