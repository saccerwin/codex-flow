import { TOPICS, TOPIC_NAMES } from '../topics/index.js';
import { info } from '../lib/logger.js';

export async function runList() {
  info('available topics:');
  for (const name of TOPIC_NAMES) {
    const topic = TOPICS[name];
    console.log(`- ${name}: ${topic.title}`);
  }
}
