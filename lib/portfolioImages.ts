export type ProjectId =
  | "hotel"
  | "school"
  | "grocery"
  | "restaurant"
  | "coaching"
  | "salon"
  | "realestate"
  | "clinic"
  | "gym"
  | "construction"
  | "ngo"
  | "freelancer"

export const PORTFOLIO_IMAGES: Record<ProjectId, { src: string }> = {
  hotel: { src: "/portfolio/hotel.png" },
  school: { src: "/portfolio/school.png" },
  grocery: { src: "/portfolio/grocery.png" },

  restaurant: { src: "/portfolio/restro.png" },
  coaching: { src: "/portfolio/coaching.png" },
  salon: { src: "/portfolio/spa.png" },

  realestate: { src: "/portfolio/realestate.png" },

  clinic: { src: "/portfolio/doctor.png" },
  gym: { src: "/portfolio/zym.png" },

  construction: { src: "/portfolio/construction.png" },
  ngo: { src: "/portfolio/ngos.png" },

  freelancer: { src: "/portfolio/freelance.png" },
}



