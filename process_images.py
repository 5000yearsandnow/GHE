from PIL import Image
import os

def process_image(input_path, output_path, size=None, format='JPEG'):
    """处理图片：调整大小、转换格式、优化质量"""
    try:
        # 打开图片
        with Image.open(input_path) as img:
            # 如果是RGBA模式，转换为RGB
            if img.mode == 'RGBA':
                img = img.convert('RGB')
            
            # 如果指定了尺寸，调整图片大小
            if size:
                img = img.resize(size, Image.Resampling.LANCZOS)
            
            # 确保输出目录存在
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
            # 保存处理后的图片
            img.save(output_path, format)
            print(f"成功处理图片: {output_path}")
    except Exception as e:
        print(f"处理图片 {input_path} 时出错: {str(e)}")

def main():
    # 创建输出目录
    output_dir = 'images/processed'
    os.makedirs(output_dir, exist_ok=True)
    
    # 处理背景图片
    background_images = [
        ('hero-bg.png', 'hero-bg.jpg'),
        ('about-bg.png', 'about-bg.jpg'),
        ('business-bg.png', 'business-bg.jpg'),
        ('contact-bg.png', 'contact-bg.jpg'),
        ('news-bg.png', 'news-bg.jpg')
    ]
    
    for input_name, output_name in background_images:
        input_path = f'images/{input_name}'
        output_path = f'{output_dir}/{output_name}'
        process_image(input_path, output_path)
    
    # 处理图标
    process_image('images/tech-icon.png', f'{output_dir}/tech-icon.png', size=(80, 80))
    
    # 处理logo
    process_image('images/logo.png', f'{output_dir}/logo.png', size=(None, 50))

if __name__ == '__main__':
    main() 