import React from 'react';
import Products from './Products';
import SoftwareShowcase from './SoftwareShowcase';

const MyProducts: React.FC = () => {
    return (
        <section id="products" className="py-32 bg-background relative border-t border-border transition-colors duration-300">
            {/* Background Separator Gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-4">我的产品 <span className="text-textMuted/40 font-light text-2xl ml-2">/ My Products</span></h2>
                    <p className="text-textMuted max-w-2xl mx-auto text-lg">
                        这里汇集了我精选的实战系统和独立开发的软件工具。
                    </p>
                </div>

                <div className="space-y-32">
                    <Products />
                    <SoftwareShowcase />
                </div>
            </div>
        </section>
    );
};

export default MyProducts;
