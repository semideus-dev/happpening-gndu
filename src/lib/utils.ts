import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import GithubSlugger from "github-slugger";

import Cookies from "js-cookie";

export interface Tokens {
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  const slugger = new GithubSlugger();
  return slugger.slug(text);
}

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getTokens = (): Tokens => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  return { accessToken, refreshToken };
};