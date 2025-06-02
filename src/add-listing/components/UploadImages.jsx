import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { storage } from './../../../configs/firebaseConfig';
import { db } from './../../../configs';
import { Images } from './../../../configs/schema';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages, setLoader, itemInfo, mode }) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [editItemImageList, setEditItemImageList] = useState([]);

  useEffect(() => {
    if (mode === "edit") {
      const initialImages = itemInfo?.images?.map(image => image?.imageUrl) || [];
      setEditItemImageList(initialImages);
    }
  }, [itemInfo]);

  useEffect(() => {
    if (triggerUploadImages) {
      UploadImagesToServer();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item !== image);
    setSelectedFileList(result);
  };

  const onImageRemoveFromDB = async (image, index) => {
    await db.delete(Images).where(eq(Images.id, itemInfo?.images[index]?.id)).returning({ id: Images.id });
    setEditItemImageList((prev) => prev.filter((item) => item !== image));
  };

  const UploadImagesToServer = async () => {
    setLoader(true);
    const uploadPromises = selectedFileList.map(async (file) => {
      const fileName = Date.now() + '_' + file.name;
      const storageRef = ref(storage, "marketplace/" + fileName);
      const metaData = { contentType: file.type };

      await uploadBytes(storageRef, file, metaData);
      const downloadUrl = await getDownloadURL(storageRef);

      await db.insert(Images).values({
        imageUrl: downloadUrl,
        ListingId: triggerUploadImages
      });

      setEditItemImageList((prev) => [...prev, downloadUrl]);
    });

    await Promise.all(uploadPromises);
    setSelectedFileList([]);
    setLoader(false);
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3 text-green-900">Upload Images</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mode === "edit" && editItemImageList.map((image, index) => (
          <div key={index} className="relative">
            <IoIosClose className="absolute m-2 text-lg cursor-pointer" onClick={() => onImageRemoveFromDB(image, index)} />
            <img src={image} alt="Image" className="h-50 w-[250px] object-cover rounded-xl" />
          </div>
        ))}

        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoIosClose className="absolute m-2 text-lg cursor-pointer" onClick={() => onImageRemove(image, index)} />
            <img src={URL.createObjectURL(image)} alt="Image" className="h-50 w-[250px] object-cover rounded-xl" />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-green-50 p-28 cursor-pointer  hover:shadow-md h-50 flex justify-center items-center">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input type="file" multiple={true} id="upload-images" onChange={onFileSelected} className=" opacity-0 h-50 w-[250px]" />
      </div>
    </div>
  );
}

export default UploadImages;
