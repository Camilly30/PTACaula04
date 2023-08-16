'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);
    const pgDashboard = new URL ('/pages/dashboard', request.url);

    if (request.nextUrl.pathname === '/') {// Verifica se o caminho é a página de login
        if (isTokenValidated && token) {
            return NextResponse.redirect(pgDashboard);
        }

    } else if (request.nextUrl.pathname === pgDashboard) {// Verifica  se o token não é válido ou não existe
    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === pgDashboard) {
            return NextResponse.redirect(urlLogin);
        }
    } 
  } 
  NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard']
};

