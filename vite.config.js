import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

export default defineConfig({
  plugins: [
    {
      name: 'copy-custom-assets',
      closeBundle() {
        copyFolderSync('Portfolio_files', 'dist/Portfolio_files');
        copyFolderSync('asset', 'dist/asset');
        copyFolderSync('fonts', 'dist/fonts');
      }
    }
  ]
});
