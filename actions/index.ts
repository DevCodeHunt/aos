"use server";
import { revalidatePath } from "next/cache";
import { projects } from "@/constants";
import {
  AddFeed,
  AddIndustry,
  AddProject,
  CareerFormData,
  ContactFormData,
  MessageData,
  Project,
  UpdateFeed,
  UpdateIndustry,
  UpdateProject,
} from "@/types";
import cloudinary, { cloudinaryConfig } from "@/utils/cloudinary";
import prisma from "@/lib/db";
import { careerTempate } from "@/templates/career-template";
import { sendError } from "next/dist/server/api-utils";
import { sendMailToCompany } from "@/utils/nodemailer";
import { Resend } from "resend";
import { contactTempate } from "@/templates/contact-template";

const resend = new Resend("re_K7QNBGMp_2CtC4XDVcgBuFGetzLGpuaaz");

export const addProject = async (body: AddProject) => {
  const { title, description, image } = body;

  if (!title) {
    return {
      status: 400,
      message: "Title is required",
    };
  }

  if (!description) {
    return {
      status: 400,
      message: "Description is required",
    };
  }

  if (!image) {
    return {
      status: 400,
      message: "Image is required",
    };
  }

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        image,
      },
    });

    return newProject;
  } catch (error: any) {
    return {
      status: 500,
      message: error.message,
    };
  }

  revalidatePath("/gia/marketing")
};

export const getAllProjects = async () => {
  return await prisma.project.findMany();
};

export const getProject = async (id: string) => {
  return await prisma.project.findUnique({
    where: {
      id,
    },
  });
};

export const updateProject = async (project: UpdateProject) => {
  const { id, title, description, image } = project;
  await prisma.project.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      image,
      updatedAt: new Date(),
    },
  });

  revalidatePath("/gia/marketing")
};

export const deleteProject = async (id: string) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
  revalidatePath("/gia/marketing")
};

export const addIndustry = async (body: AddIndustry) => {
  const { title, description, banner, thumbnail, projects, services } = body;
  const projectRecords = await prisma.project.findMany({
    where: {
      id: {
        in: projects, // Array of project IDs
      },
    },
  });

  const serviceRecords = await prisma.service.findMany({
    where: {
      id: {
        in: services,
      },
    },
  });
  await prisma.industry.create({
    data: {
      title,
      description,
      thumbnail,
      banner,
      projects: projectRecords,
      services: serviceRecords,
    },
  });

  revalidatePath("/gia/marketing/industries")
};

export const getAllIndustries = async () => {
  const industries = await prisma.industry.findMany();
  return industries;
};

export const updateIndustry = async (body: UpdateIndustry) => {
  const { id, title, description, banner, thumbnail, projects, services } =
    body;
 

  const projectRecords = await prisma.project.findMany({
    where: {
      id: {
        in: projects,
      },
    },
  });

  const serviceRecords = await prisma.service.findMany({
    where: {
      id: {
        in: services,
      },
    },
  });

  await prisma.industry.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      thumbnail,
      banner,
      projects: projectRecords,
      services: serviceRecords,
      updatedAt: new Date(),
    },
  });

  revalidatePath("/gia/marketing/industries")
};

export const deleteIndustry = async (id: string) => {
 await prisma.industry.delete({
    where: {
      id,
    },
  });
  revalidatePath("/gia/marketing/industries")
};

export const getIndustry = async (id: string) => {
  return await prisma.industry.findUnique({
    where: {
      id,
    },
  });
};

export const addService = async (body: AddProject) => {
  const { title, description, image } = body;

  if (!title) {
    return {
      status: 400,
      message: "Title is required",
    };
  }

  if (!description) {
    return {
      status: 400,
      message: "Description is required",
    };
  }

  if (!image) {
    return {
      status: 400,
      message: "Image is required",
    };
  }

  try {
    await prisma.service.create({
      data: {
        title,
        description,
        image,
      },
    });

    revalidatePath("/gia/marketing/services")
  } catch (error: any) {
    return {
      status: 500,
      message: error.message,
    };
  }

  
};

export const updateService = async (project: UpdateProject) => {
  const { id, title, description, image } = project;
  await prisma.service.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      image,
      updatedAt: new Date(),
    },
  });

  revalidatePath("/gia/marketing/services")
};

export const getService = async (id: string) => {
  return await prisma.service.findUnique({
    where: {
      id,
    },
  });
};

export const getAllServices = async () => {
  return await prisma.service.findMany();
};

export const deletService = async (id: string) => {
  await prisma.service.delete({
    where: {
      id,
    },
  });
  revalidatePath("/gia/marketing/services")
};

export const addFeeds = async (body: AddFeed) => {
  const { title, description, image } = body;
  await prisma.feed.create({
    data: {
      title,
      description,
      image,
    },
  });

  revalidatePath("/gia/marketing/feeds")
};

export const getAllFeeds = async () => {
  return await prisma.feed.findMany();
};

export const getFeed = async (id: string) => {
  return await prisma.feed.findUnique({
    where: {
      id,
    },
  });
};

export const updateFeed = async (project: UpdateFeed) => {
  const { id, title, description, image } = project;
  await prisma.feed.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      image,
      updatedAt: new Date(),
    },
  });

  revalidatePath("/gia/marketing/feeds")
};

export const deleteFeed = async (id: string) => {
  await prisma.feed.delete({
    where: {
      id,
    },
  });
  revalidatePath("/gia/marketing/feeds")
};

export const sendMailToCareer = async (body: CareerFormData) => {
  const { name, email, message, phone, files } = body;
  const data = {
    email,
    name,
    message,
    phone,
    companyMail: process.env.COMPANY_MAIL,
    companyPhone: process.env.COMPANY_PHONE,
    companyLocation: process.env.COMPANY_LOCATION,
  };
  const html = careerTempate(message);

  resend.emails.send({
    from: email,
    to: "onboarding@resend.dev",
    subject: `Career Form Submission: ${name}`,
    html,
    attachments: files,
  });

  return prisma.career.create({
    data: {
      name,
      email,
      phone,
      attachments: files.map((file) => file.path),
      message,
    },
  });
};

export const getAllCareers = async () => {
  return await prisma.career.findMany();
};

export const getCareer = async (id: string) => {
  return await prisma.career.findUnique({
    where: {
      id,
    },
  });
}

export const deleteCareer = async (id: string) => {
  const deletedCareer = await prisma.career.delete({
    where: {
      id,
    },
  });
  revalidatePath("/gia/marketing/careers")
}


export const sendMailToContact = async (body: ContactFormData) => {
  const { name, email, message, title, files, organization, subscribed } = body;
 
  const html = contactTempate(message);

  await resend.emails.send({
    from: email,
    to: "onboarding@resend.dev",
    subject: `${organization ? organization : ""} Contact Form Submission`,
    html,
    attachments: files,
  });

  return prisma.contact.create({
    data: {
      name,
      email,
      title,
      organization,
      subscribed,
      attachments: files.map((file) => file.path),
      message,
    },
  });
};

export const getAllContacts = async () => {
  return await prisma.contact.findMany();
};

export const getContact = async (id: string) => {
  return await prisma.contact.findUnique({
    where: {
      id,
    },
  });
}


export const deleteContact = async (id: string) => {
  await prisma.contact.delete({
    where: {
      id,
    },
  });
  revalidatePath("/gia/marketing/contacts")
}