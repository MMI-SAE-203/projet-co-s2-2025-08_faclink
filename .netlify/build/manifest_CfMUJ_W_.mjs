import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_Dc7gvlnh.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/","cacheDir":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/node_modules/.astro/","outDir":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/dist/","srcDir":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/","publicDir":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/public/","buildClientDir":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/dist/","buildServerDir":"file:///Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"}],"routeData":{"route":"/apropos","isIndex":false,"type":"page","pattern":"^\\/apropos\\/?$","segments":[[{"content":"apropos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apropos.astro","pathname":"/apropos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"}],"routeData":{"route":"/aspectlegaux","isIndex":false,"type":"page","pattern":"^\\/aspectlegaux\\/?$","segments":[[{"content":"aspectlegaux","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aspectlegaux.astro","pathname":"/aspectlegaux","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"}],"routeData":{"route":"/assistance","isIndex":false,"type":"page","pattern":"^\\/assistance\\/?$","segments":[[{"content":"assistance","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/assistance.astro","pathname":"/assistance","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"}],"routeData":{"route":"/fonctionnalite","isIndex":false,"type":"page","pattern":"^\\/fonctionnalite\\/?$","segments":[[{"content":"fonctionnalite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fonctionnalite.astro","pathname":"/fonctionnalite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"},{"type":"inline","content":".inscription-container[data-astro-cid-h6znpxjw]{display:flex;justify-content:center;align-items:center;min-height:80vh;padding:2rem}.form-wrapper[data-astro-cid-h6znpxjw]{background-color:#fff;border-radius:8px;padding:2rem;box-shadow:0 4px 12px #0000001a;width:100%;max-width:500px}h1[data-astro-cid-h6znpxjw]{text-align:center;margin-bottom:2rem;color:#333}.inscription-form[data-astro-cid-h6znpxjw]{display:flex;flex-direction:column;gap:1.5rem}.form-group[data-astro-cid-h6znpxjw]{display:flex;flex-direction:column;gap:.5rem}label[data-astro-cid-h6znpxjw]{font-weight:600;font-size:.9rem}input[data-astro-cid-h6znpxjw]{padding:.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem}.btn-primary[data-astro-cid-h6znpxjw]{background-color:#4a6cf7;color:#fff;border:none;padding:.75rem;border-radius:4px;font-size:1rem;cursor:pointer;transition:background-color .3s ease;margin-top:1rem}.btn-primary[data-astro-cid-h6znpxjw]:hover{background-color:#3a5be0}.login-link[data-astro-cid-h6znpxjw]{text-align:center;margin-top:1.5rem}.login-link[data-astro-cid-h6znpxjw] a[data-astro-cid-h6znpxjw]{color:#4a6cf7;text-decoration:none}.login-link[data-astro-cid-h6znpxjw] a[data-astro-cid-h6znpxjw]:hover{text-decoration:underline}\n"}],"routeData":{"route":"/inscription","isIndex":false,"type":"page","pattern":"^\\/inscription\\/?$","segments":[[{"content":"inscription","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscription.astro","pathname":"/inscription","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[],"routeData":{"route":"/muretudiant/[id]","isIndex":false,"type":"page","pattern":"^\\/muretudiant\\/([^/]+?)\\/?$","segments":[[{"content":"muretudiant","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/muretudiant/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[],"routeData":{"route":"/muretudiant","isIndex":true,"type":"page","pattern":"^\\/muretudiant\\/?$","segments":[[{"content":"muretudiant","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/muretudiant/index.astro","pathname":"/muretudiant","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/apropos.CW0Caawu.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://faclink.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/apropos.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/aspectlegaux.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/assistance.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/fonctionnalite.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/inscription.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/apropos@_@astro":"pages/apropos.astro.mjs","\u0000@astro-page:src/pages/aspectlegaux@_@astro":"pages/aspectlegaux.astro.mjs","\u0000@astro-page:src/pages/assistance@_@astro":"pages/assistance.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/fonctionnalite@_@astro":"pages/fonctionnalite.astro.mjs","\u0000@astro-page:src/pages/inscription@_@astro":"pages/inscription.astro.mjs","\u0000@astro-page:src/pages/muretudiant/[id]@_@astro":"pages/muretudiant/_id_.astro.mjs","\u0000@astro-page:src/pages/muretudiant/index@_@astro":"pages/muretudiant.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CfMUJ_W_.mjs","/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BiydqmUl.mjs","/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BEmMiHOX.js","astro:scripts/page.js":"_astro/page.BvKxy2Uc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu\"),n=document.body;e&&t&&e.addEventListener(\"click\",()=>{const i=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",String(!i)),t.setAttribute(\"aria-hidden\",String(i)),i?(t.classList.add(\"opacity-0\",\"invisible\"),n.classList.remove(\"overflow-hidden\")):(t.classList.remove(\"opacity-0\",\"invisible\"),n.classList.add(\"overflow-hidden\"))});"]],"assets":["/_astro/tape.DKBANkfm.webp","/_astro/croix.C9FGVNMS.webp","/_astro/alice.Dmck8nzV.webp","/_astro/mathis.CXWPQOg5.webp","/_astro/maelie.BL4PqSjq.webp","/_astro/personnes.DtAbLmrV.webp","/_astro/content.DucTM6v9.webp","/_astro/discu.BXRPOj6U.webp","/_astro/fleche.CdflotS5.svg","/_astro/sophie.NKPRhopX.webp","/_astro/ordi.CKRBU-xU.webp","/_astro/amed.C7NEIUZB.webp","/_astro/manon.IBDWFh6r.webp","/_astro/sarah.Byn_zzF2.webp","/_astro/landingpage.CnCrnBBQ.webp","/_astro/verifier.C3AKuppa.webp","/_astro/lea.h8vUjnJ_.webp","/_astro/lucas.B3h9lzY6.webp","/_astro/perdu.D9Y13y3N.webp","/_astro/courier.Cp_pySpG.webp","/_astro/logo.DtHJ8wtk.svg","/_astro/pinterest.BZ8NbIRK.svg","/_astro/instagram.41r_a8p-.svg","/_astro/tiktok.D768GIHn.svg","/_astro/apropos.CW0Caawu.css","/favicon.svg","/_astro/page.BvKxy2Uc.js","/_astro/page.BvKxy2Uc.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"pEPDRYNOc2+uZiLMssnQ41sbiaj4fUaAmDHLg6bnK+U=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
