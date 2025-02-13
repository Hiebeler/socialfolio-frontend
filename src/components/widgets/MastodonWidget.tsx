import { MastodonData } from "@/types/widget-types";
import { BaseWidget } from "./BaseWidget";
import Link from "next/link";
import Image from "next/image";

interface MastodonWidgetProps {
  data: MastodonData;
  size: { cols: number; rows: number };
  variant: number;
  deleteWidget: () => void;
}

export function MastodonWidget({ data, size, variant, deleteWidget }: MastodonWidgetProps) {
  return (
    <BaseWidget deleteWidget={deleteWidget}>
      {variant == 1 && (
        <Link href={"https://" + data.instance + "/@" + data.username}>
          <div className="h-full w-full flex justify-center items-center bg-[#6364ff] relative group">
            <img
              src="/widgets/mastodon/mastodon-logo-white.webp"
              alt="Mastodon logo"
              className="w-[50%] h-[50%] object-contain"
            />

            <img
              src="/icons/arrow-open.svg"
              alt=""
              className="absolute right-4 top-4 h-6 w-6 opacity-0 ease-in-out duration-300 group-hover:opacity-100"
            />
          </div>
        </Link>
      )}

      {variant == 2 && (
        <Link href={"https://" + data.instance + "/@" + data.username}>
          <div className="h-full w-full p-8">
            <Image
              src={data.avatar}
              alt="Mastodon logo"
              height={64}
              width={64}
              className="rounded-2xl object-contain"
            />

            <div>
              <p className="text-black">{data.description}</p>
            </div>
          </div>
        </Link>
      )}

      {variant == 3 && (
        <Link href={"https://" + data.instance + "/@" + data.username}>
          <div className="h-full w-full p-[15%] bg-[#6364ff] text-white flex justify-between flex-col">
            <Image
              src="/widgets/mastodon/mastodon-logo-white.webp"
              alt="Mastodon logo"
              width={56}
              height={56}
              className="object-contain"
            />
            <div>
              <h3 className="font-bold text-4xl mb-4">Mastodon</h3>
              <span>
                @{data.username}@{data.instance}
              </span>
            </div>
          </div>
        </Link>
      )}
    </BaseWidget>
  );
}
