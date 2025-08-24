'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Card from '@/components/ui/Card';

const features = [
  {
    title: 'AI-Powered Solutions',
    description: 'Integrating artificial intelligence to create smarter, more adaptive web applications.',
    icon: '🤖',
  },
  {
    title: 'Predictive Analytics',
    description: 'Leveraging machine learning to provide insights and predictions for your business.',
    icon: '📊',
  },
  {
    title: 'Natural Language Processing',
    description: 'Implementing NLP to create more intuitive and conversational user experiences.',
    icon: '💬',
  },
];

export default function FeaturesAI() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            AI-Powered Development
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Harnessing the power of artificial intelligence to create smarter, more efficient web solutions.
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
              <Card className="h-full text-center">
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