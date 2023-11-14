"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side ">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full rounded-md bg-blue-100 text-base-content">
            {/* Sidebar content here */}
              <li><Link href="/admin">Dashboard</Link></li>
              <li><Link href="/admin/banner">Banner</Link></li>
              <li>
                <details >
                  <summary>Berita</summary>
                  <ul>
                    <li><Link href="/admin/berita-News">Berita News</Link></li>
                    <li><Link href="/admin/berita-Terkini">Berita Terkini</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details >
                  <summary>Dokumen</summary>
                  <ul>
                    <li><Link href="/admin/dokumen-peraturan">Dokumen Peraturan</Link></li>
                    <li><Link href="/admin/dokumen-perencanaan">Dokumen Perencanaan</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details >
                  <summary>Transparansi</summary>
                  <ul>
                    <li><Link href="/admin/transparansi-PKD">Transparansi PKD</Link></li>
                    <li><Link href="/admin/transparansi-PAD">Transparansi PAD</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href="/admin/user">User</Link></li>
              <li><a onClick={() => signOut()}>Logout</a></li>
            </ul>
          
        
        </div>
    </div>
  )
}
