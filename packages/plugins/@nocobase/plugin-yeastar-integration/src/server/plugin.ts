/**
 * This file is part of the TCRM project.
 * Yeastar P-Series Cloud Edition integration plugin for NocoBase.
 */

import { Plugin } from '@nocobase/server';
import path from 'path';

export class PluginYeastarIntegrationServer extends Plugin {
  async afterAdd() {
    // Register collections
  }

  async beforeLoad() {
    // Load collections from migrations
  }

  async load() {
    // Register API routes using middleware pattern
    this.app.use(async (ctx, next) => {
      const path = ctx.path;
      const method = ctx.method;

      // Webhook endpoints
      if (method === 'POST' && path.startsWith('/yeastar/webhook/')) {
        ctx.body = { success: true };
        return;
      }

      // Click-to-call endpoint
      if (method === 'POST' && path === '/yeastar/dial') {
        ctx.body = { success: true };
        return;
      }

      await next();
    });
  }

  async install() {
    // Run migrations
  }

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginYeastarIntegrationServer;
