'use client';
import { UploadDropzone } from 'react-uploader';
import { Uploader } from 'uploader';

const uploader = Uploader({ apiKey: 'public_kW15b6k48wHEjGR8criKk5RMZ1Db' });
const uploaderOptions = {
  multi: true,
  editor: { images: { cropRatio: 1 } },
  // Comment out this line & use 'onUpdate' instead of
  // 'onComplete' to have the dropzone close after upload.
  showFinishButton: true,

  styles: {
    colors: {
      primary: '#377dff'
    }
  }
};

export function ImageUploader() {
  return (
    <UploadDropzone
      uploader={uploader}
      options={uploaderOptions}
      onUpdate={(files) => console.log(`Files: ${files.map((x) => x.fileUrl).join('\n')}`)}
      onComplete={console.log}
      width="600px"
      height="375px"
    />
  );
}
