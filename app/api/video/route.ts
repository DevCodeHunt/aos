import fs from "fs";
import path from "path";

const CHUNK_SIZE_IN_BYTES = 1000000 // 1MB

export async function GET(req: Request, res: Response) {
  const videoPath = path.join(process.cwd(), "public", "videos", "iStock-1490250606.mp4");
  const range = req.headers.get('range');
 
  const videoSizeInBytes = fs.statSync(videoPath).size
  const chunkStart = Number(range?.replace(/\D/g, ''));
  const chunkEnd = Math.min(chunkStart + CHUNK_SIZE_IN_BYTES - 1, videoSizeInBytes - 1);
  const contentLength = chunkEnd - chunkStart + 1;
  const videoStream = fs.createReadStream(videoPath, {
    start: chunkStart,
    end: chunkEnd
  });

  const headers = {
    'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength.toString(),
    'Content-Type': 'video/mp4',
  } as {[key: string]: string}

  return new Response(videoStream as any, {
    status: 206,
    headers
  })
  
}
