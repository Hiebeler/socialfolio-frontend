import { NoteWidgetData } from "@/types/widget-types";
import { BaseWidget } from "./BaseWidget";

interface NoteWidgetProps {
  data: NoteWidgetData;
  size: { cols: number; rows: number };
  variant: number;
  isOwner: boolean;
  deleteWidget: () => void;
  editWidget: () => void;
}

export function NoteWidget({ data, size, isOwner, variant, deleteWidget, editWidget }: NoteWidgetProps) {
  return (
    <BaseWidget isOwner={isOwner} isClickable={false} deleteWidget={deleteWidget} editWidget={editWidget}>
      {variant == 1 && (
          <div className="h-full w-full p-[10%] flex justify-center items-center">
            <p className="break-words max-w-full">
              {data.note}
            </p>
          </div>
      )}
    </BaseWidget>
  );
}
