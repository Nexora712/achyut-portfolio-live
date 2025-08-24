'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Card from '@/components/ui/Card';

const features = [
  {
    title: 'User-Centered Design',
    description: 'Creating interfaces that prioritize user needs and provide intuitive experiences.',
    icon: '🎯',
  },
  {
    title: 'Responsive Layouts',
    description: 'Designing adaptable interfaces that work seamlessly across all devices.',
    icon: '📱',
  },
  {
    title: 'Accessibility Focus',
    description: 'Ensuring all users can access and interact with your digital products.',
    icon: '♿',
  },
];

export default function FeaturesUIUX() {
  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            UI/UX Design Excellence
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Crafting beautiful, functional interfaces that engage users and drive results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center" variant="secondary">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}