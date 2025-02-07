import Link from "next/link";
import Alert from "../components/Alert";
import NavBar from "../components/NavBar";

export default function Campaigns() {
    return (
        <>
        <Alert />
        <NavBar />
        <div className="m-auto my-10 max-w-5xl space-y-10 px-3">
            <h1 className="font-bold">Unfollow X is a joke to celebrate 21 years of Facebook</h1>
            <p className="mt-3">But if you really want to develop it, please edit the corresponding file on GitHub</p>
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