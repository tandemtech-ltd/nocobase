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
    // Register API routes
    this.app.router.post('/yeastar/webhook/call-ringing', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    this.app.router.post('/yeastar/webhook/call-answered', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    this.app.router.post('/yeastar/webhook/call-ended', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    this.app.router.post('/yeastar/webhook/call-missed', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    this.app.router.post('/yeastar/webhook/call-failed', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    this.app.router.post('/yeastar/webhook/agent-status', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    this.app.router.post('/yeastar/webhook/queue-metrics', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
    });

    // Click-to-call endpoint
    this.app.router.post('/yeastar/dial', async (ctx, next) => {
      const { body } = ctx.request;
      ctx.body = { success: true };
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