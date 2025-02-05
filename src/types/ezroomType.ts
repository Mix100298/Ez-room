interface Owner {
    _id: string;
    firstname: string;
    lastname: string;
    avatar_image: string;
  }
  interface Furniture {
    _id: string;
    english_name: string;
    description: string;
    image: string;
    url: string;
    price: number;
  }
  
  interface Room {
    _id: string;
    type: "Bedroom" | "Bathroom";
    style: "Contemporary" | "Bohemian" | "Modern";
    budget: number;
    furnitures: Furniture[];
    images: string[];
    selectedimage: number;
  }
  
  interface Post {
    post: {
      _id: string;
      ownerid: Owner;
      status: "public" | "private";
      roomid: Room;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    isOwner: boolean;
  }

  interface IFurniture {
    _id: string;
    english_name: string;
    thai_name: string;
    description: string;
    brand: string;
    url: string;
    price: number;
    category: string;
    image: string;
  }