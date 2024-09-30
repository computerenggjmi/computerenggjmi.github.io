
const Ribbon = () => {
    return (
        <div className="flex h-1 w-full bg-green-deep">
            <div className="relative flex w-full items-center justify-evenly">
                <div className="flex w-1/4 flex-col items-center gap-y-2">
                    <img
                        src="https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg"
                        alt="money"
                        className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
                    />
                    <h2 className="mt-40 text-center text-2xl font-semibold">
                    <span class="text-green-deep">87.50%+ </span> <br /> Placed in 2016
                    </h2>
                </div>
                <div className="flex w-1/4 flex-col items-center gap-y-2">
                    <img
                        src="https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg"

                        alt="money"
                        className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
                    />
                    <h2 className="-mt-28 text-center text-2xl font-semibold">
                    <span class="text-green-deep">77.27%+ </span> <br /> Placed in 2022
                    </h2>
                </div>
                <div className="flex w-1/4 flex-col items-center gap-y-2">
                    <img
                        src="https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg"
                        alt="time"
                        className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
                    />
                    <h2 className="mt-40 text-center text-2xl font-semibold">
                    <span class="text-green-deep">70.45%+ </span> <br /> Placed in 2021
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Ribbon;
