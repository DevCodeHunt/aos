export type Project = {
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type Service = {
  id: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Industry = {
  banner: string;
  thumbnail: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  projects: Project[];
  services: Service[];
};

export type TFeed = {
  id: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Store = {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export type TImage = {
  public_id?: string;
  secure_url: string;
  width?: number;
  height?: number;
};

export type AddProject = {
  title: string;
  description: string;
  image: string;
};

export type UpdateProject = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type AddIndustry = {
  title: string;
  description: string;
  banner: string;
  thumbnail: string;
  projects: string[];
  services: string[];
};

export type UpdateIndustry = {
  title: string;
  description: string;
  banner: string;
  thumbnail: string;
  projects: string[];
  services: string[];
  id: string;
};

export type AddFeed = {
  title: string;
  description: string;
  image: string;
};

export type UpdateFeed = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type MailFile = {
  path: string;
  filename: string;
};

export type CareerFormData = {
  name: string;
  email: string;
  message: string;
  phone: string;
  files: MailFile[];
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  files: MailFile[];
  title: string;
  organization: string;
  subscribed: boolean;
};


export type MessageData = {
  email: string;
  name: string;
  message: string;
  phone: string;
  companyMail: string;
  companyPhone: string;
  companyLocation: string;
};


export type Career = {
  id: string;
  name: string;
  email: string;
  message: string;
  phone: string;
  attachments: string[];
  createdAt: Date;
}

export type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  title: string;
  organization: string;
  attachments: string[];
  subscribed: boolean;
  createdAt: Date;
}
