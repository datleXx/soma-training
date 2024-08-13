import { Card } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/linkedin-logo.png";

const FounderIntroCard = () => {
  return (
    <Card>
      <p className="text-lg font-medium text-gray-900">Founders</p>
      <Link href="https://www.linkedin.com/in/eglyman/">
        <div className="cursor-pointer p-4">
          <div className="flex items-center gap-3">
            <div>
              <Link href="https://www.linkedin.com/in/eglyman/">
                <Image
                  src="https://storage.googleapis.com/pulumi-public-bucket-soma-b541c34/a2c3d542d5c9cdc604afc5862ff43fe9219540e1/cllpzgc0306hjs60ir6iw5z9y-pfp"
                  alt="Founder 1"
                  width={70}
                  height={70}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="https://www.linkedin.com/in/eglyman/">
                <h1 className="font-medium text-sky-700 hover:text-sky-500">
                  Eric Glyman
                </h1>
              </Link>
              <div className="flex items-center gap-2">
                <Image src={Logo} alt="LinkedIn" width={20} height={20} />
                <Image
                  src="https://www.somaportal.com/gray-logo.svg"
                  alt="logo"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default FounderIntroCard;
