import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Try multiple possible paths for the resume
    const possiblePaths = [
      path.join(process.cwd(), 'public', 'resume', 'Achyut_Pandey_Resume.pdf'),
      path.join(process.cwd(), 'public', 'Achyut_Pandey_Resume.pdf'),
      path.join(process.cwd(), 'resume', 'Achyut_Pandey_Resume.pdf')
    ]
    
    let filePath = ''
    let fileExists = false
    
    // Check which path actually has the file
    for (const path of possiblePaths) {
      if (fs.existsSync(path)) {
        filePath = path
        fileExists = true
        break
      }
    }
    
    if (!fileExists) {
      console.log('Resume file not found in any of these locations:', possiblePaths)
      return new NextResponse('Resume file not found. Please contact the developer.', { 
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      })
    }

    const file = fs.readFileSync(filePath)
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Achyut_Pandey_Resume.pdf"',
        'Cache-Control': 'no-cache'
      }
    })
  } catch (error) {
    console.error('Resume download error:', error)
    return new NextResponse('Error downloading resume', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}
