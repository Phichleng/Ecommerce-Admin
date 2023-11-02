import {PacmanLoader} from "react-spinners";

export default function SpinnerLogo({fullWith}) {
    if (fullWith) {
        return (
            <div className="w-full flex justify-center">
                <PacmanLoader color={'#1E3A8A'} speedMultiplier={2} />
            </div>
        );
    }
    return (
        <PacmanLoader color={'#1E3A8A'} speedMultiplier={2} />
    );
}