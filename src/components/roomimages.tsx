import React, { use, useEffect } from "react";

interface ImageProps {
  images: string[];
  valueimage: number;
  onChange: (value: number) => void;
}

const Roomimages: React.FC<ImageProps> = ({
  valueimage,
  images,
  onChange,
}: ImageProps) => {
  // Value of the checked radio image
  const [checkedValue, setCheckedValue] = React.useState<number>(valueimage);
  console.log("checkedValue", checkedValue);
  console.log("images", images);


  return (
    <div>
      <div className="flex justify-between gap-2">
        <div className="max-h-[144px] max-w-[144px] rounded">
          <input
            type="radio"
            id="room1"
            name="room"
            value={0}
            className="hidden peer"
            onChange={() => setCheckedValue(0)}
            checked={checkedValue === 0}
          />
          <label
            htmlFor="room1"
            className="block w-full h-full rounded-md cursor-pointer peer-checked:border-4 peer-checked:border-blue-500"
          >
            <img
              src={
                images[0] ||
                (images[0] !== typeof String
                  ? "https://discussions.apple.com/content/attachment/660042040"
                  : "https://discussions.apple.com/content/attachment/660042040")
              }
              alt="room1"
              className="rounded w-full aspect-square object-cover"
            />
          </label>
        </div>
        <div className="max-h-[144px] max-w-[144px] rounded">
          <input
            type="radio"
            id="room2"
            name="room"
            value={1}
            className="cursor-pointer hidden peer"
            onChange={(e) => setCheckedValue(1)}
            checked={checkedValue === 1}
          />
          <label
            htmlFor="room2"
            className="block w-full h-full rounded-md cursor-pointer peer-checked:border-4 peer-checked:border-blue-500"
          >
            <img
              src={
                images[1] ||
                (images[1] !== typeof String
                  ? "https://discussions.apple.com/content/attachment/660042040"
                  : "https://discussions.apple.com/content/attachment/660042040")
              }
              alt="room1"
              className="rounded w-full aspect-square object-cover"
            />
          </label>
        </div>
        <div className="max-h-[144px] max-w-[144px] rounded">
          <input
            type="radio"
            id="room3"
            name="room"
            value={2}
            className="cursor-pointer hidden peer"
            onChange={() => setCheckedValue(2)}
            checked={checkedValue === 2}
          />
          <label
            htmlFor="room3"
            className="block w-full h-full rounded-md cursor-pointer peer-checked:border-4 peer-checked:border-blue-500"
          >
            <img
              src={
                images[2] ||
                (images[2] !== typeof String
                  ? "https://discussions.apple.com/content/attachment/660042040"
                  : "https://discussions.apple.com/content/attachment/660042040")
              }
              alt="room1"
              className="rounded w-full aspect-square object-cover"
            />
          </label>
        </div>
      </div>
      {/* Selected Image Test */}
      <div id="selectedImageContainer">
        <img
          id="selectedImage"
          src=""
          alt="Selected Image"
          className="hidden object-cover"
        />
      </div>
    </div>
  );
};
export default Roomimages;
