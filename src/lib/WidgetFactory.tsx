import { AddNewWidget } from "@/components/widgets/AddNewWidget";
import { BaseWidget } from "@/components/widgets/BaseWidget";
import { CodebergWidget } from "@/components/widgets/CodebergWidget";
import { FediverseWidget } from "@/components/widgets/Fediverse";
import { GithubWidget } from "@/components/widgets/GithubWidget";
import { ImageWidget } from "@/components/widgets/ImageWidget";
import { LemmyWidget } from "@/components/widgets/LemmyWidget";
import { LiberaPayWidget } from "@/components/widgets/LiberaPayWidget";
import { MastodonWidget } from "@/components/widgets/MastodonWidget";
import { MatrixWidget } from "@/components/widgets/MatrixWidget";
import { NoteWidget } from "@/components/widgets/NoteWidget";
import { PixelfedWidget } from "@/components/widgets/PixelfedWidget";
import { TimezoneWidget } from "@/components/widgets/TimezoneWidget";
import {
  CodebergData,
  FediverseData,
  GitHubData,
  ImageWidgetData,
  LemmyWidgetData,
  LiberaPayData,
  MastodonData,
  MatrixData,
  NoteWidgetData,
  PixelfedData,
  TimezoneData,
  WidgetProps,
} from "@/types/widget-types";

export function WidgetFactory({
  widget,
  isOwner,
  deleteWidget,
  editWidget,
}: {
  widget: WidgetProps;
  isOwner: boolean;
  deleteWidget: () => void;
  editWidget: () => void;
}) {
  switch (widget.type) {
    case "mastodon":
      return (
        <MastodonWidget
          id={widget.id}
          data={widget.data as MastodonData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "pixelfed":
      return (
        <PixelfedWidget
          data={widget.data as PixelfedData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "lemmy":
      return (
        <LemmyWidget
          data={widget.data as LemmyWidgetData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
      case "fediverse":
      return (
        <FediverseWidget
          data={widget.data as FediverseData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
      case "matrix":
      return (
        <MatrixWidget
          data={widget.data as MatrixData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "github":
      return (
        <GithubWidget
          id={widget.id}
          data={widget.data as GitHubData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
      case "codeberg":
      return (
        <CodebergWidget
          data={widget.data as CodebergData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "image":
      return (
        <ImageWidget
          data={widget.data as ImageWidgetData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "liberapay":
      return (
        <LiberaPayWidget
          data={widget.data as LiberaPayData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "localTime":
      return (
        <TimezoneWidget
          data={widget.data as TimezoneData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );
    case "note":
      return (
        <NoteWidget
          data={widget.data as NoteWidgetData}
          size={widget.size}
          variant={widget.variant}
          isOwner={isOwner}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        />
      );

    case "newwidget":
      return <AddNewWidget size={widget.size} />;
    default:
      return (
        <BaseWidget
          isOwner={false}
          isClickable={true}
          deleteWidget={deleteWidget}
          editWidget={editWidget}
        >
          <div>Unknown Widget Type</div>
        </BaseWidget>
      );
  }
}
