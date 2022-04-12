export default function myLoader(src) {
  return `${process.env.NEXT_PUBLIC_SERVER_IMAGES}${src}`;
}
