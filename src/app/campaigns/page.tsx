import Link from "next/link";
import Alert from "../components/Alert";
import NavBar from "../components/NavBar";

export default function Campaigns() {
    return (
        <>
        <Alert />
        <NavBar />
        <div className="m-auto my-10 max-w-5xl space-y-10 px-3">
            <h1 className="text-2xl font-bold">Campaigns</h1>
            <ul className="mt-3">
                <li>
                    <Link className="hover:underline cursor-pointer" href="https://x.com/elonmusk">
                        Click and unfollow <span className="text-red-500">Elon Musk</span>
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline cursor-pointer" href="https://x.com/CNEWS">
                        Click and unfollow <span className="text-red-500">CNews</span>
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline cursor-pointer" href="https://x.com/ZemmourEric">
                        Click and unfollow <span className="text-red-500">Eric Zemmour</span>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}