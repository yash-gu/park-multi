import os
import glob

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Section paddings
    content = content.replace('py-20', 'py-12')
    content = content.replace('py-24', 'py-12')
    content = content.replace('py-28', 'py-16')
    content = content.replace('lg:py-28', 'lg:py-16')
    content = content.replace('lg:py-24', 'lg:py-16')
    
    # Inner box paddings
    content = content.replace('p-12', 'p-8')
    content = content.replace('p-10', 'p-6')
    content = content.replace('p-8', 'p-5')
    content = content.replace('p-7', 'p-5')
    content = content.replace('sm:p-8', 'sm:p-6')
    content = content.replace('lg:p-10', 'lg:p-8')
    content = content.replace('lg:p-8', 'lg:p-6')
    content = content.replace('md:p-8', 'md:p-6')
    content = content.replace('md:p-10', 'md:p-6')
    
    # Gaps
    content = content.replace('gap-12', 'gap-8')
    content = content.replace('lg:gap-12', 'lg:gap-8')
    content = content.replace('gap-10', 'gap-6')
    content = content.replace('gap-8', 'gap-5')
    
    # Rounding
    content = content.replace('rounded-3xl', 'rounded-2xl')
    
    # Text sizes (Headers)
    content = content.replace('text-5xl', 'text-4xl')
    content = content.replace('lg:text-5xl', 'lg:text-4xl')
    content = content.replace('text-4xl', 'text-3xl')
    content = content.replace('sm:text-4xl', 'sm:text-3xl')
    
    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('src/components/*.tsx'):
    replace_in_file(filepath)

print("Done shrinking")
