import './App.css'

const techStack = [
  {
    name: "JavaScript",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>,
  },
  {
    name: "TypeScript",
    image: <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="2500" height="2500"><path className="st0" fill = "#007acc" d="M0 200V0h400v400H0"/><path className="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" fill = "#fff"/></svg>,
  },
  {
    name: "React",
    image: <svg height="2500" viewBox="175.7 78 490.6 436.9" width="2194" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>,
  },
  {
    name: "GitHub",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 999.937 999.937"><path d="M0 499.968c0-138.012 48.825-255.843 146.476-353.493C244.125 48.825 361.956 0 499.969 0 637.98 0 755.811 48.825 853.462 146.475c97.649 97.65 146.475 215.481 146.475 353.493s-48.825 255.843-146.475 353.493c-97.65 97.65-215.481 146.476-353.493 146.476-138.013 0-255.844-48.825-353.493-146.476C48.825 755.812 0 637.979 0 499.968zm54.684 0c0 122.389 43.617 227.199 130.851 314.434 87.234 87.233 192.045 130.851 314.434 130.851 122.388 0 227.199-43.617 314.433-130.851 87.234-87.234 130.851-192.045 130.851-314.434 0-122.388-43.616-227.199-130.851-314.433C727.168 98.301 622.356 54.684 499.969 54.684c-122.389 0-227.199 43.617-314.434 130.851C98.301 272.769 54.684 377.58 54.684 499.968zm140.617 107.415c-2.604-2.604-2.604-5.208 0-7.812 5.207-5.208 11.718-7.161 19.529-5.859 7.812 1.302 12.369 2.604 13.671 3.906 9.114 3.906 19.205 12.694 30.271 26.366 11.066 13.671 19.855 23.11 26.366 28.318 31.248 26.04 63.146 27.993 95.696 5.859 2.604-9.114 6.836-16.926 12.694-23.437 5.858-6.51 11.393-11.066 16.601-13.671 5.209-2.604 14.323-6.51 27.343-11.718-42.967-3.906-77.795-11.393-104.486-22.46s-47.849-25.063-63.473-41.989c-20.832-23.436-33.527-54.033-38.084-91.791-4.558-37.758-1.628-72.261 8.789-103.509 7.812-19.53 18.879-37.106 33.2-52.731-10.416-32.55-8.463-69.657 5.859-111.321 41.664 2.604 79.422 16.926 113.274 42.966 65.1-16.926 132.804-17.577 203.111-1.953 9.114-6.51 23.111-14.647 41.989-24.413 18.879-9.765 42.641-15.299 71.285-16.601 5.208 14.322 8.789 31.248 10.742 50.778s.977 37.758-2.929 54.684c29.945 31.248 45.569 72.912 46.871 124.992 0 41.664-7.16 76.167-21.482 103.509s-39.711 50.127-76.167 68.354c-24.738 11.719-57.288 18.879-97.65 21.483 18.229 9.114 31.574 18.554 40.037 28.319 8.464 9.765 13.997 25.063 16.602 45.895v61.521l1.952 59.566c3.906 6.511 8.464 12.044 13.672 16.602 5.208 4.557 9.765 7.812 13.671 9.765 3.905 1.953 5.208 4.883 3.905 8.789-1.302 3.906-6.51 5.859-15.623 5.859-22.135 0-39.711-7.812-52.731-23.437-3.906-6.51-5.859-14.321-5.859-23.436v-93.744c0-10.416-2.604-17.903-7.812-22.46-5.208-4.558-10.416-7.487-15.624-8.789v123.039c0 22.134 2.604 36.456 7.812 42.966s8.463 13.021 9.766 19.53c1.302 1.302.325 2.278-2.93 2.929-3.254.65-8.788-.325-16.601-2.929-16.926-3.906-28.644-12.695-35.154-26.366-6.51-13.671-9.765-28.319-9.765-43.943V667.926H488.25v121.086c0 15.624-3.256 30.598-9.766 44.919-9.113 18.229-26.04 27.993-50.777 29.295-3.906-1.302-5.859-2.604-5.859-3.905 1.302-1.303 5.208-7.812 11.718-19.53 1.302-2.604 2.93-7.812 4.883-15.624 1.954-7.812 2.93-16.926 2.93-27.342v-123.04c-5.208 1.302-10.091 4.231-14.648 8.789s-6.836 12.044-6.836 22.46v93.744c0 9.113-1.953 16.926-5.859 23.436-11.718 15.624-29.295 23.437-52.73 23.437-9.114 0-14.322-1.953-15.624-5.859-1.303-2.604-.977-4.883.977-6.836s4.883-4.232 8.789-6.836c3.906-2.604 6.51-4.558 7.812-5.859 5.208-3.906 9.113-9.114 11.718-15.624 3.906-5.208 4.882-18.879 2.929-41.013s-2.279-36.456-.977-42.966c-33.853 11.718-68.355 5.858-103.51-17.577-10.416-10.416-20.832-25.39-31.248-44.919-7.812-14.323-23.436-31.249-46.871-50.779z" fill = "#C5C6C7"/></svg>,
  },
  {
    name: "Postman",
    image: 
    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="-13.58674873666481 -3.5096047119942106 81.71274873666479 72.05384966725056"><path d="M57.327 12.44a32 32 0 1 0-5.761 44.88c13.98-10.804 16.56-30.895 5.76-44.88z" className="C" fill = "#ff6c37"/><path d="M42.793 20.388L29.3 33.988l-3.813-3.92c13.28-13.28 14.613-12.08 17.307-9.68z" className="D" fill = "#fff"/><path d="M29.3 34.36a.48.48 0 0 1-.32-.133l-3.84-3.84a.48.48 0 0 1 0-.667c13.093-13.093 14.88-12.48 17.973-9.68a.427.427 0 0 1 .16.347c.02.13-.03.263-.133.347L29.647 34.228a.506.506 0 0 1-.347.133zm-3.147-4.293l3.147 3.147 12.8-12.8a2.88 2.88 0 0 0-3.787-.64c-2.32 1.04-6.053 4.213-12.16 10.293z" className="C"/><path d="M33.167 37.748l-3.68-3.76L42.98 20.654c3.627 3.547-1.76 9.467-9.813 17.093z" className="D" fill="#fff"/><path d="M33.167 38.228a.56.56 0 0 1-.32-.133l-3.76-3.68a.56.56 0 0 1 0-.427.517.517 0 0 1 0-.347L42.58 20.148a.506.506 0 0 1 .693 0 4.136 4.136 0 0 1 1.333 3.173c0 3.6-4.107 8.133-11.093 14.747a.56.56 0 0 1-.347.16zm-2.987-4.24L33.193 37c5.333-5.04 10.427-10.24 10.453-13.76a3.04 3.04 0 0 0-.693-2.053z" className="C"/><path d="M25.593 30.148l2.667 2.667a.16.16 0 0 1 0 .24l-5.627 1.2a.533.533 0 0 1-.48-.907l3.28-3.253s.107 0 .16.053z"  fill="#fff"/><path d="M22.5 34.788a1.04 1.04 0 0 1-.88-.507 1.014 1.014 0 0 1 .187-1.2l3.253-3.28a.64.64 0 0 1 .853 0l2.667 2.667c.158.15.22.377.16.587s-.236.377-.453.427l-5.627 1.2zm2.987-4.053l-3.013 3.013 4.987-1.067zm.24-.24z" className="C"/><path d="M49.967 12.894c-1.93-1.862-4.962-1.94-6.986-.183s-2.37 4.773-.794 6.943 4.547 2.778 6.847 1.4l-3.627-3.627z" className="D" fill="#fff"/><path d="M46.367 22.28a5.65 5.65 0 0 1-5.156-3.508 5.667 5.667 0 0 1 1.2-6.118 5.71 5.71 0 0 1 8 0c.102.086.16.213.16.347a.46.46 0 0 1-.16.347l-4.32 4.08 3.28 3.227a.45.45 0 0 1 .133.4.48.48 0 0 1-.213.347 5.8 5.8 0 0 1-2.933.88zm0-10.347c-1.9.01-3.6 1.153-4.313 2.9s-.325 3.758 1.007 5.1a4.665 4.665 0 0 0 5.173.987l-3.147-3.147a.427.427 0 0 1 0-.667l4.16-4.187a4.785 4.785 0 0 0-2.88-.987z" className="C"/><path d="M50.047 12.974l-4.56 4.533 3.627 3.627a5.52 5.52 0 0 0 1.013-.747 5.333 5.333 0 0 0-.08-7.413z" className="D" fill="#fff"/><path d="M49.033 21.534a.4.4 0 0 1-.32-.133l-3.627-3.627a.427.427 0 0 1 0-.667l4.533-4.453a.48.48 0 0 1 .8 0 5.6 5.6 0 0 1 0 8 4.88 4.88 0 0 1-1.067.853.43.43 0 0 1-.32.027zM46.1 17.428l3.013 3.013a5.12 5.12 0 0 0 .587-.48 4.72 4.72 0 0 0 1.387-3.333 4.58 4.58 0 0 0-1.147-3.04z" className="C"/><path d="M43.353 20.948a1.948 1.948 0 0 0-2.667 0L28.607 33l2 2.027 12.773-11.2a1.977 1.977 0 0 0-.027-2.88z" className="D" fill="#fff"/><path d="M30.5 35.508a.48.48 0 0 1-.32-.133l-2.027-2.027a.48.48 0 0 1 0-.667l12.08-12.027a2.454 2.454 0 0 1 4.187 1.813 2.51 2.51 0 0 1-.827 1.76l-12.773 11.2a.455.455 0 0 1-.32.08zM29.087 33l1.333 1.36 12.533-10.907c.31-.27.495-.656.507-1.067s-.15-.813-.453-1.093a1.493 1.493 0 0 0-2.107 0z" className="C"/><path d="M19.247 46.734a.27.27 0 0 0 0 .32l.533 2.32a.688.688 0 0 1-.332.7.65.65 0 0 1-.762-.077l-3.653-3.52L26.42 35h3.947l2.667 2.667a60.54 60.54 0 0 1-13.787 9.067z" className="D" fill="#fff"/><path d="M19.007 50.654c-.302-.006-.6-.13-.8-.347l-3.493-3.493a.427.427 0 0 1 0-.667L26.18 34.654a.45.45 0 0 1 .24-.133h3.973a.48.48 0 0 1 .32 0l2.667 2.667a.426.426 0 0 1 .133.373.43.43 0 0 1-.16.347l-.213.187a65.33 65.33 0 0 1-13.68 8.773l.507 2.16a1.15 1.15 0 0 1-1.093 1.413zm-3.253-4.187L18.9 49.64a.16.16 0 0 0 .213 0 .16.16 0 0 0 0-.187l-.533-2.32a.744.744 0 0 1 .4-.853 65.56 65.56 0 0 0 13.333-8.587l-2.187-2.187h-3.573zm3.84.48z" className="C"/><path d="M12.287 49.214l2.667-2.667 4.107 4.107-6.533-.453a.534.534 0 0 1-.24-.986z" className="D" fill="#fff"/><path d="M19.14 51.054l-6.507-.453c-.386-.036-.718-.3-.854-.653s-.053-.772.214-1.054l2.667-2.667a.48.48 0 0 1 .667 0l4.08 4.08a.452.452 0 0 1 0 .533.507.507 0 0 1-.267.213zm-6.507-1.493l5.333.347-2.933-2.747z" className="C"/><path d="M30.74 35.322l-5.387.827 3.12-3.093z" className="D"  fill="#fff"/><path d="M25.353 36.654a.456.456 0 0 1-.427-.267.45.45 0 0 1 0-.533l3.093-3.12a.506.506 0 0 1 .693 0L30.98 35a.45.45 0 0 1 0 .48.47.47 0 0 1-.373.347l-5.333.827zm3.12-2.907L26.74 35.48l2.987-.453z" className="C"/><path d="M30.74 35.32l-3.76.48a.48.48 0 0 1-.453-.8l1.947-1.947z" className="D"  fill="#fff"/><path d="M26.873 36.308a.987.987 0 0 1-.853-.507.96.96 0 0 1 .16-1.147l1.947-1.947a.506.506 0 0 1 .693 0l2.267 2.267a.48.48 0 0 1-.293.827l-3.733.48zm0-.987l2.827-.347-1.253-1.253-1.6 1.6zm23.2-19.28a.4.4 0 0 0-.507-.16.37.37 0 0 0-.186.22.377.377 0 0 0 .026.287c.187.393.135.858-.133 1.2a.338.338 0 0 0-.1.253.38.38 0 0 0 .1.253.29.29 0 0 0 .213 0 .35.35 0 0 0 .347-.107 1.84 1.84 0 0 0 .24-1.947z" className="C"/></svg>,
  },
  {
    name: "Node.js",
    image: <svg width="2500" height="2500" viewBox="0 0 512 314" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="68.188%" y1="17.487%" x2="27.823%" y2="89.755%" id="b"><stop stopColor="#41873F" offset="0%"/><stop stopColor="#418B3D" offset="32.88%"/><stop stopColor="#419637" offset="63.52%"/><stop stopColor="#3FA92D" offset="93.19%"/><stop stopColor="#3FAE2A" offset="100%"/></linearGradient><path id="a" d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z"/><linearGradient x1="43.277%" y1="55.169%" x2="159.245%" y2="-18.306%" id="d"><stop stopColor="#41873F" offset="13.76%"/><stop stopColor="#54A044" offset="40.32%"/><stop stopColor="#66B848" offset="71.36%"/><stop stopColor="#6CC04A" offset="90.81%"/></linearGradient><linearGradient x1="-4413.77%" y1="13.43%" x2="5327.93%" y2="13.43%" id="e"><stop stopColor="#6CC04A" offset="9.192%"/><stop stopColor="#66B848" offset="28.64%"/><stop stopColor="#54A044" offset="59.68%"/><stop stopColor="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="-4.389%" y1="49.997%" x2="101.499%" y2="49.997%" id="f"><stop stopColor="#6CC04A" offset="9.192%"/><stop stopColor="#66B848" offset="28.64%"/><stop stopColor="#54A044" offset="59.68%"/><stop stopColor="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="-9713.77%" y1="36.21%" x2="27.93%" y2="36.21%" id="g"><stop stopColor="#6CC04A" offset="9.192%"/><stop stopColor="#66B848" offset="28.64%"/><stop stopColor="#54A044" offset="59.68%"/><stop stopColor="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="-103.861%" y1="50.275%" x2="100.797%" y2="50.275%" id="h"><stop stopColor="#6CC04A" offset="9.192%"/><stop stopColor="#66B848" offset="28.64%"/><stop stopColor="#54A044" offset="59.68%"/><stop stopColor="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="130.613%" y1="-211.069%" x2="4.393%" y2="201.605%" id="i"><stop stopColor="#41873F" offset="0%"/><stop stopColor="#418B3D" offset="32.88%"/><stop stopColor="#419637" offset="63.52%"/><stop stopColor="#3FA92D" offset="93.19%"/><stop stopColor="#3FAE2A" offset="100%"/></linearGradient></defs><g fill="none"><path d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z" fill="#539E43"/><path d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0 .925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zM508.648 124.244c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 0 1 3.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 3.005 0l29.125-16.99z" fill="#C5C6C7"/><path d="M456.293 121.586a1.05 1.05 0 0 1 1.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z" fill="#539E43"/><g transform="translate(134.068 70.501)"><mask id="c" fill="#fff"><use xlinkHref="#a"/></mask><use fill="url(#b)" xlinkHref="#a"/><g mask="url(#c)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zM56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z"/><path d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z" fill="url(#d)"/></g><g mask="url(#c)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z"/><path fill="url(#e)" fillRule="evenodd" d="M50.391.809l-.693.347h.924l-.231-.347z" transform="translate(0 -9.246)"/><path d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z" fill="url(#f)" fillRule="evenodd" transform="translate(0 -9.246)"/><path fill="url(#g)" fillRule="evenodd" d="M111.3 104.712l-.347-.578v.809l.346-.231z" transform="translate(0 -9.246)"/><path d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#h)" fillRule="evenodd" transform="translate(0 -9.246)"/><path d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#i)" fillRule="evenodd" transform="translate(0 -9.246)"/></g></g></g></svg>,
  },
  {
    name: "HTML",
    image: <svg fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>,
  },
  {
    name: "CSS",
    image: <svg fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>,
  },
  {
    name: "PostgreSQL",
    image: <svg width="2424" height="2500" viewBox="0 0 256 264" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"/><path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002" fill="#336791"/><path d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225" fill="#FFF"/><path d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z" fill="#FFF"/></svg>,
  }
]

function App() {

  return (
    <>
    <header className="portfolio-header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
    <section className="portfolio-section"> 
      <div className="container">
        <div className="intro">
          <h2>Hey,</h2>
          <h1>I'm Ryan</h1>
          <p className="self-title">Junior Fullstack Software Engineer</p>
          <div className="contacts-list">
            <a className="contacts" href="mailto:ryanshaunsmith@gmail.com" target="_blank"><button>Email</button></a>
            <a className="contacts"href="https://www.linkedin.com/in/ryanshaunsmith/" target="_blank"><button>LinkedIn</button></a>
            <a className="contacts" href="https://github.com/Tyriol" target="_blank"><button>GitHub</button></a>
            </div>
        </div>
        <img className="profile-img" src="../cartoon-stylised-profile-pic.webp" alt="profile picture"/>
      </div>
    </section>
    <section className="portfolio-section">
      {/* more about me and my journey */}
      <div className="container">
        <img className="profile-img" src="../Ryansquareheadshot.jpg" alt="profile picture"/>
        <div className="about-me">
          <p>Hello! Over the past four months I've thrown my everything in to following my heart and passion.</p>
          <p>I've been learning the fundamentals of Software Development and really honing the skill of learning how to learn.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-section">
      {/* Tech Stack */}
      <div className="container">
        <h2>The tech stack I've been working with</h2>
        <div className="tech">
          <ul className='tech-list'>
            { techStack.map((tech) => {
                return (
                  <li className='tech-item' key={tech.name}>
                    {tech.image}
                    <p>{tech.name}</p>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </section>
    <section className="portfolio-section">
      {/* 
      // picture of project
      // Title of project
      // 
      */}
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project">
            <img src="../project1.png" alt="project1"/>
            <h3>Project 1</h3>
            <p>Project 1 is a project that I have been working on for the past 4 weeks. It is a fullstack application that allows users to...</p>
          </div>
          <div className="project">
            <img src="../project2.png" alt="project2"/>
            <h3>Project 2</h3>
            <p>Project 2 is a project that I have been working on for the past 4 weeks. It is a fullstack application that allows users to...</p>
          </div>
          <div className="project">
            <img src="../project3.png" alt="project3"/>
            <h3>Project 3</h3>
            <p>Project 3 is a project that I have been working on for the past 4 weeks. It is a fullstack application that allows users to...</p>
          </div>
          <div className="project">
            <img src="../project4.png" alt="project4"/>
            <h3>Project 4</h3>
            <p>Project 4 is a project that I have been working on for the past 4 weeks. It is a fullstack application that allows users to...</p>
          </div>
        </div>
      </div>
      {/* project 5 */}
      {/* project 6 */}
    </section>
    </>
  )
}

export default App
