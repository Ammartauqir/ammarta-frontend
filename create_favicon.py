from PIL import Image
import os

def create_favicon():
    # Open the profile picture
    img = Image.open('src/assets/AmmarTauqir_crop5.jpg')
    
    # Create a square image by cropping
    width, height = img.size
    size = min(width, height)
    left = (width - size) // 2
    top = (height - size) // 2
    right = left + size
    bottom = top + size
    img = img.crop((left, top, right, bottom))
    
    # Resize to favicon sizes
    sizes = [16, 32, 48, 64, 128, 192, 512]
    for size in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(f'public/favicon-{size}x{size}.png')
    
    # Save the main favicon
    img.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon.ico')
    
    # Save the apple touch icon
    img.resize((192, 192), Image.Resampling.LANCZOS).save('public/logo192.png')
    
    # Save the large icon
    img.resize((512, 512), Image.Resampling.LANCZOS).save('public/logo512.png')

if __name__ == '__main__':
    create_favicon() 