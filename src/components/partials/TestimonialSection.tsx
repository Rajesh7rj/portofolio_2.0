import React from 'react';
import { reviews } from '@/data/reviews';
import Image from 'next/image';
import { FiMessageSquare } from 'react-icons/fi';

const TestimonialSection = () => {
  return (
    <div id="testimonials" className="py-24">
      <p className="section-label">05. Testimonials</p>
      <h2 className="section-title">What People Say</h2>
      <div className="section-divider" />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="dark-card flex flex-col gap-5 p-7"
          >
            {/* Quote Icon */}
            <FiMessageSquare size={24} style={{ color: '#ffffff', opacity: 0.6 }} />

            {/* Comment */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#9ca3af' }}
            >
              &ldquo;{review.comment.trim()}&rdquo;
            </p>

            {/* Author */}
            <div className="mt-auto flex items-center gap-4 border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <div
                className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full"
                style={{ border: '2px solid rgba(255, 255, 255,0.3)' }}
              >
                {review.author.imageUrl ? (
                  <Image
                    src={review.author.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt={review.author.name}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: '#ffffff' }}
                  >
                    {review.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#f9fafb' }}>{review.author.name}</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>{review.author.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
