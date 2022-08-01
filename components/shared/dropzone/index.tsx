import type {
  ChangeEvent,
  DetailedHTMLProps,
  DragEvent,
  FC,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { Fragment, useRef, useState } from 'react';

interface DropZoneProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const DropZone: FC<DropZoneProps> = (props) => {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  function openInputWindow() {
    uploadInputRef.current?.click();
  }

  function handleSingleFile(file: File) {
    if (file?.name?.endsWith('.apk')) {
      setFiles([file]);
    }
  }

  function handleMultipleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      if (files[i]?.name?.endsWith('.apk')) {
        setFiles((current) => [...current, files[i]]);
      }
    }
  }

  function stopBubbling(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDropHandle(e: DragEvent) {
    e.preventDefault();
    const { files } = e.dataTransfer;

    if (!files.length) {
      return;
    }
    if (files.length === 1) {
      handleSingleFile(files[0]);
    } else {
      handleMultipleFiles(files);
    }
  }

  async function handleFileUpload(file: File, index: number) {}

  function removeFile(idx: number) {
    setFiles((current) => {
      return current.filter((_, index) => index !== idx);
    });
  }

  function handleFileInput(ev: ChangeEvent<HTMLInputElement>) {
    const files = ev.target.files;

    if (!files?.length) {
      return;
    }

    if (files?.length === 1) {
      handleSingleFile(files[0]);
    } else {
      handleMultipleFiles(files);
    }
  }

  function uploadAll() {
    files.forEach((file, index) => {
      handleFileUpload(file, index);
    });
  }

  return (
    <Fragment>
      <div
        {...props}
        onDrop={onDropHandle}
        onDragOver={stopBubbling}
        onClick={openInputWindow}
        onKeyDown={openInputWindow}
      >
        <input
          ref={uploadInputRef}
          type="file"
          hidden
          multiple
          onChange={handleFileInput}
        />
        {props.children}
      </div>
    </Fragment>
  );
};

export default DropZone;
